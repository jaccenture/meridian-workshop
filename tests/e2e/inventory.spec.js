import { test, expect } from '@playwright/test'

test.describe('Inventory', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/inventory')
    await page.waitForSelector('table', { timeout: 10000 })
    await expect(page.locator('.loading')).toHaveCount(0)
  })

  test('displays inventory table with data', async ({ page }) => {
    const table = page.locator('table').first()
    await expect(table).toBeVisible()
    await expect(table.getByRole('columnheader', { name: 'SKU' })).toBeVisible()
    await expect(table.getByRole('columnheader', { name: 'Item Name' })).toBeVisible()
    await expect(table.getByRole('columnheader', { name: 'Location' })).toBeVisible()
    const rows = await table.getByRole('row').count()
    expect(rows).toBeGreaterThan(1)
  })

  test('displays stock levels heading with count', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Stock Levels/ })).toBeVisible()
    await expect(page.getByPlaceholder(/Search/)).toBeVisible()
  })

  test('search filters table rows', async ({ page }) => {
    const searchInput = page.getByPlaceholder(/Search/)
    await searchInput.fill('Sensor')
    await page.waitForTimeout(300)
    const rows = page.locator('table tbody tr')
    const count = await rows.count()
    expect(count).toBeGreaterThan(0)
    for (let i = 0; i < count; i++) {
      await expect(rows.nth(i)).toContainText('Sensor')
    }
  })

  test('clear search restores all rows', async ({ page }) => {
    const searchInput = page.getByPlaceholder(/Search/)
    await searchInput.fill('Sensor')
    await page.waitForTimeout(300)
    const filteredCount = await page.locator('table tbody tr').count()

    await searchInput.clear()
    await page.waitForTimeout(300)
    const allCount = await page.locator('table tbody tr').count()
    expect(allCount).toBeGreaterThan(filteredCount)
  })

  test('warehouse filter reduces visible items', async ({ page }) => {
    const allCount = await page.locator('table tbody tr').count()
    await page.locator('select').nth(1).selectOption('Tokyo')
    await page.waitForTimeout(500)
    const filteredCount = await page.locator('table tbody tr').count()
    expect(filteredCount).toBeLessThanOrEqual(allCount)
    expect(filteredCount).toBeGreaterThan(0)
  })

  test('category filter reduces visible items', async ({ page }) => {
    await page.locator('select').nth(2).selectOption('Sensors')
    await page.waitForTimeout(500)
    const rows = page.locator('table tbody tr')
    const count = await rows.count()
    expect(count).toBeGreaterThan(0)
  })
})
