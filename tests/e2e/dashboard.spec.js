import { test, expect } from '@playwright/test'

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Overview', exact: true })).toBeVisible()
    await expect(page.locator('.loading')).toHaveCount(0)
  })

  test('loads and displays KPI section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Key Performance Indicators' })).toBeVisible()
    await expect(page.getByText('Orders Fulfilled')).toBeVisible()
    await expect(page.getByText('Order Fill Rate')).toBeVisible()
  })

  test('displays order health section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Order Health' })).toBeVisible()
    await expect(page.locator('.health-metric-label').filter({ hasText: 'Revenue' })).toBeVisible()
    await expect(page.getByText('Avg Order Value')).toBeVisible()
    await expect(page.getByText('On-Time Rate')).toBeVisible()
  })

  test('displays inventory value by category', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Inventory Value by Category' })).toBeVisible()
    await expect(page.locator('.h-bar-label').filter({ hasText: 'Circuit Boards' })).toBeVisible()
    await expect(page.locator('.h-bar-label').filter({ hasText: 'Sensors' })).toBeVisible()
  })

  test('displays inventory shortages table', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 3, name: /Inventory Shortages/ })).toBeVisible()
    const table = page.locator('table').first()
    await expect(table.getByRole('columnheader', { name: 'SKU' })).toBeVisible()
    await expect(table.getByRole('columnheader', { name: 'Priority' })).toBeVisible()
  })

  test('filter by warehouse updates data', async ({ page }) => {
    const locationFilter = page.locator('select').nth(1)
    await locationFilter.selectOption('San Francisco')
    await page.waitForTimeout(500)
    await expect(page.getByRole('heading', { name: 'Key Performance Indicators' })).toBeVisible()
  })

  test('filter by category updates data', async ({ page }) => {
    const categoryFilter = page.locator('select').nth(2)
    await categoryFilter.selectOption('Sensors')
    await page.waitForTimeout(500)
    await expect(page.getByRole('heading', { name: 'Key Performance Indicators' })).toBeVisible()
  })

  test('reset filters button enables after selecting a filter', async ({ page }) => {
    const resetBtn = page.getByRole('button', { name: /Reset/ })
    await expect(resetBtn).toBeDisabled()
    await page.locator('select').nth(1).selectOption('London')
    await expect(resetBtn).toBeEnabled()
    await resetBtn.click()
    await expect(resetBtn).toBeDisabled()
  })

  test('navigation links are present', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Overview' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Inventory' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Orders' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Reports' })).toBeVisible()
  })
})
