import { test, expect } from '@playwright/test'

test.describe('Reports', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/reports')
    await expect(page.locator('.loading')).toHaveCount(0)
    await expect(page.getByRole('heading', { name: 'Performance Reports', exact: true })).toBeVisible()
  })

  test('displays quarterly performance table', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Quarterly Performance' })).toBeVisible()
    const table = page.locator('table').first()
    await expect(table.getByRole('columnheader', { name: 'Quarter' })).toBeVisible()
    await expect(table.getByRole('columnheader', { name: 'Total Revenue' })).toBeVisible()
    await expect(table.getByRole('columnheader', { name: 'Fulfillment Rate' })).toBeVisible()
    await expect(table.getByText('Q1-2025')).toBeVisible()
  })

  test('displays monthly revenue trend chart', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Monthly Revenue Trend' })).toBeVisible()
    const barCount = await page.locator('.bar').count()
    expect(barCount).toBeGreaterThan(0)
  })

  test('displays month-over-month table', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Month-over-Month Analysis' })).toBeVisible()
    const momTable = page.locator('table').nth(1)
    await expect(momTable.getByRole('columnheader', { name: 'Revenue' })).toBeVisible()
    await expect(momTable.getByRole('columnheader', { name: 'Growth Rate' })).toBeVisible()
  })

  test('displays summary stat cards', async ({ page }) => {
    await expect(page.getByText('Total Revenue (YTD)')).toBeVisible()
    await expect(page.getByText('Avg Monthly Revenue')).toBeVisible()
    await expect(page.getByText('Total Orders (YTD)')).toBeVisible()
    await expect(page.getByText('Best Performing Quarter')).toBeVisible()
  })

  test('warehouse filter reloads data without error', async ({ page }) => {
    await page.locator('select').nth(1).selectOption('Tokyo')
    await page.waitForTimeout(600)
    await expect(page.locator('.error')).toHaveCount(0)
    await expect(page.getByRole('heading', { name: 'Quarterly Performance' })).toBeVisible()
  })

  test('no console errors on load', async ({ page }) => {
    const errors = []
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.reload()
    await expect(page.locator('.loading')).toHaveCount(0)
    const reportErrors = errors.filter(e => e.includes('reports'))
    expect(reportErrors).toHaveLength(0)
  })

  test('fulfillment rate badges are displayed', async ({ page }) => {
    const badgeCount = await page.locator('.badge').count()
    expect(badgeCount).toBeGreaterThan(0)
  })
})
