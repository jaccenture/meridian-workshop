<template>
  <div>
    <div class="page-header">
      <h2>{{ t('restocking.title') }}</h2>
      <p>{{ t('restocking.description') }}</p>
    </div>

    <div v-if="loading" class="loading">{{ t('common.loading') }}</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <template v-else>
      <div class="stats-grid">
        <div class="stat-card budget-card">
          <div class="stat-label">{{ t('restocking.budgetCeiling') }}</div>
          <input
            type="number"
            v-model.number="budgetCeiling"
            min="0"
            step="1000"
            class="budget-input"
          />
        </div>
        <div class="stat-card info">
          <div class="stat-label">{{ t('restocking.allCandidates') }}</div>
          <div class="stat-value">{{ items.length }}</div>
        </div>
        <div class="stat-card warning">
          <div class="stat-label">{{ t('restocking.totalCost') }}</div>
          <div class="stat-value">{{ formatCurrency(totalEstimatedCost) }}</div>
        </div>
        <div class="stat-card success">
          <div class="stat-label">{{ t('restocking.withinBudget') }}</div>
          <div class="stat-value">{{ itemsWithinBudget.length }}</div>
        </div>
        <div class="stat-card success">
          <div class="stat-label">{{ t('restocking.costWithinBudget') }}</div>
          <div class="stat-value">{{ formatCurrency(totalWithinBudget) }}</div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">{{ t('restocking.allCandidates') }}</h3>
        </div>

        <div v-if="items.length === 0" class="loading">
          {{ t('restocking.noCandidates') }}
        </div>
        <div v-else class="table-container">
          <table>
            <thead>
              <tr>
                <th>{{ t('restocking.table.sku') }}</th>
                <th>{{ t('restocking.table.itemName') }}</th>
                <th>{{ t('restocking.table.category') }}</th>
                <th>{{ t('restocking.table.warehouse') }}</th>
                <th>{{ t('restocking.table.currentStock') }}</th>
                <th>{{ t('restocking.table.reorderPoint') }}</th>
                <th>{{ t('restocking.table.forecastedDemand') }}</th>
                <th>{{ t('restocking.table.recommendedQty') }}</th>
                <th>{{ t('restocking.table.unitCost') }}</th>
                <th>{{ t('restocking.table.estimatedCost') }}</th>
                <th>{{ t('restocking.table.status') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in items"
                :key="item.sku + '-' + item.warehouse"
                :class="{ 'over-budget': !withinBudgetKeys.has(item.sku + '-' + item.warehouse) }"
              >
                <td><code>{{ item.sku }}</code></td>
                <td>{{ item.name }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.warehouse }}</td>
                <td>
                  <span class="stock-low">{{ item.quantity_on_hand }}</span>
                  <span class="reorder-note"> / {{ item.reorder_point }}</span>
                </td>
                <td>{{ item.reorder_point }}</td>
                <td>
                  <span class="badge" :class="item.trend">{{ item.forecasted_demand }}</span>
                </td>
                <td><strong>{{ item.recommended_qty }}</strong></td>
                <td>{{ formatCurrency(item.unit_cost) }}</td>
                <td>{{ formatCurrency(item.estimated_cost) }}</td>
                <td>
                  <span
                    class="badge"
                    :class="withinBudgetKeys.has(item.sku + '-' + item.warehouse) ? 'success' : 'danger'"
                  >
                    {{ withinBudgetKeys.has(item.sku + '-' + item.warehouse)
                      ? t('restocking.withinBudgetBadge')
                      : t('restocking.overBudgetBadge') }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue'
import { api } from '../api'
import { useFilters } from '../composables/useFilters'
import { useI18n } from '../composables/useI18n'

export default {
  name: 'Restocking',
  setup() {
    const { selectedLocation, selectedCategory } = useFilters()
    const { t, currentCurrency } = useI18n()

    const loading = ref(false)
    const error = ref(null)
    const items = ref([])
    const budgetCeiling = ref(50000)

    const formatCurrency = (value) => {
      const locale = currentCurrency.value === 'JPY' ? 'ja-JP' : 'en-US'
      const currency = currentCurrency.value || 'USD'
      return Number(value).toLocaleString(locale, { style: 'currency', currency, maximumFractionDigits: 0 })
    }

    const loadData = async () => {
      try {
        loading.value = true
        error.value = null
        items.value = await api.getRestocking({
          warehouse: selectedLocation.value,
          category: selectedCategory.value
        })
      } catch (err) {
        error.value = 'Failed to load restocking recommendations'
      } finally {
        loading.value = false
      }
    }

    const totalEstimatedCost = computed(() =>
      items.value.reduce((sum, item) => sum + item.estimated_cost, 0)
    )

    const itemsWithinBudget = computed(() => {
      let running = 0
      return items.value.filter(item => {
        if (running + item.estimated_cost <= budgetCeiling.value) {
          running += item.estimated_cost
          return true
        }
        return false
      })
    })

    const withinBudgetKeys = computed(() =>
      new Set(itemsWithinBudget.value.map(i => i.sku + '-' + i.warehouse))
    )

    const totalWithinBudget = computed(() =>
      itemsWithinBudget.value.reduce((sum, item) => sum + item.estimated_cost, 0)
    )

    watch([selectedLocation, selectedCategory], loadData)
    onMounted(loadData)

    return {
      loading,
      error,
      items,
      budgetCeiling,
      itemsWithinBudget,
      withinBudgetKeys,
      totalEstimatedCost,
      totalWithinBudget,
      formatCurrency,
      t
    }
  }
}
</script>

<style scoped>
.budget-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.budget-input {
  width: 100%;
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
  border: none;
  border-bottom: 2px solid #e2e8f0;
  padding: 0.25rem 0;
  background: transparent;
  outline: none;
  font-family: inherit;
}

.budget-input:focus {
  border-bottom-color: #2563eb;
}

.over-budget {
  opacity: 0.4;
}

.stock-low {
  color: #dc2626;
  font-weight: 600;
}

.reorder-note {
  color: #94a3b8;
  font-size: 0.8em;
}

code {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.8rem;
  color: #475569;
  background: #f1f5f9;
  padding: 0.125rem 0.375rem;
  border-radius: 3px;
}
</style>
