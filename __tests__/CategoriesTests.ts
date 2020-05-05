const CategoryGroups = require('../categories/CategoryGroups.json')
const SavingsGoalCategories = require('../categories/SavingsGoalCategories.json')
const WithdrawCategories = require('../categories/WithdrawCategories.json')
const DepositCategories = require('../categories/DepositCategories.json')
const TaskCategories = require('../categories/TaskCategories.json')

// Make a simple array of colors instead of Colors object for easy compairing

// Make a simple array of CategoryGroups instead of CategoryGroups object for easy compairing
let categoryGroupArray = []
Object.keys(CategoryGroups).forEach(function (key) {
  categoryGroupArray.push(CategoryGroups[key])
})

// Make a simple array of ids for easy compairing
let SavingsGoalCategoryIds = []
Object.keys(SavingsGoalCategories).forEach(function (key) {
  SavingsGoalCategoryIds.push(SavingsGoalCategories[key].id)
})

let WithdrawCategoryIds = []
Object.keys(WithdrawCategories).forEach(function (key) {
  WithdrawCategoryIds.push(WithdrawCategories[key].id)
})

let DepositCategoryIds = []
Object.keys(DepositCategories).forEach(function (key) {
  DepositCategoryIds.push(DepositCategories[key].id)
})

let TaskCategoryIds = []
Object.keys(TaskCategories).forEach(function (key) {
  TaskCategoryIds.push(TaskCategories[key].id)
})

describe('CategoriesTest', () => {
  it('All categories must have an id', () => {
    Object.keys(SavingsGoalCategories).forEach(function (key) {
      let id = SavingsGoalCategories[key].id
      expect(id).toEqual(expect.anything())
    })

    Object.keys(WithdrawCategories).forEach(function (key) {
      let id = WithdrawCategories[key].id
      expect(id).toEqual(expect.anything())
    })

    Object.keys(DepositCategories).forEach(function (key) {
      let id = DepositCategories[key].id
      expect(id).toEqual(expect.anything())
    })

    Object.keys(TaskCategories).forEach(function (key) {
      let id = TaskCategories[key].id
      expect(id).toEqual(expect.anything())
    })
  })

  it('All categories must have a color', () => {
    Object.keys(SavingsGoalCategories).forEach(function (key) {
      let color = SavingsGoalCategories[key].color
      expect(color).toEqual(expect.anything())
    })

    Object.keys(WithdrawCategories).forEach(function (key) {
      let color = WithdrawCategories[key].color
      expect(color).toEqual(expect.anything())
    })

    Object.keys(DepositCategories).forEach(function (key) {
      let color = DepositCategories[key].color
      expect(color).toEqual(expect.anything())
    })

    Object.keys(TaskCategories).forEach(function (key) {
      let color = TaskCategories[key].color
      expect(color).toEqual(expect.anything())
    })
  })

  it('All categories must have an image', () => {
    Object.keys(SavingsGoalCategories).forEach(function (key) {
      let image = SavingsGoalCategories[key].image
      expect(image).toEqual(expect.anything())
    })

    Object.keys(WithdrawCategories).forEach(function (key) {
      let image = WithdrawCategories[key].image
      expect(image).toEqual(expect.anything())
    })

    Object.keys(DepositCategories).forEach(function (key) {
      let image = DepositCategories[key].image
      expect(image).toEqual(expect.anything())
    })

    Object.keys(TaskCategories).forEach(function (key) {
      let image = TaskCategories[key].image
      expect(image).toEqual(expect.anything())
    })
  })

  it('All category images must start with /', () => {
    Object.keys(SavingsGoalCategories).forEach(function (key) {
      let image = SavingsGoalCategories[key].image
      expect(image.charAt(0)).toEqual('/')
    })

    Object.keys(WithdrawCategories).forEach(function (key) {
      let image = WithdrawCategories[key].image
      expect(image.charAt(0)).toEqual('/')
    })

    Object.keys(DepositCategories).forEach(function (key) {
      let image = DepositCategories[key].image
      expect(image.charAt(0)).toEqual('/')
    })

    Object.keys(TaskCategories).forEach(function (key) {
      let image = TaskCategories[key].image
      expect(image.charAt(0)).toEqual('/')
    })
  })

  it('Category ids must be unique in SavingsGoalCategories', () => {
    Object.keys(SavingsGoalCategories).forEach(function (key) {
      let id = SavingsGoalCategories[key].id
      SavingsGoalCategoryIds.splice(SavingsGoalCategoryIds.indexOf(id), 1)
      expect(SavingsGoalCategoryIds).not.toContain(id)
    })
  })

  it('Category ids must be unique in WithdrawCategories', () => {
    Object.keys(WithdrawCategories).forEach(function (key) {
      let id = WithdrawCategories[key].id
      WithdrawCategoryIds.splice(WithdrawCategoryIds.indexOf(id), 1)
      expect(WithdrawCategoryIds).not.toContain(id)
    })
  })

  it('Category ids must be unique in DepositCategories', () => {
    Object.keys(DepositCategories).forEach(function (key) {
      let id = DepositCategories[key].id
      DepositCategoryIds.splice(DepositCategoryIds.indexOf(id), 1)
      expect(DepositCategoryIds).not.toContain(id)
    })
  })

  it('Category ids must be unique in TaskCategories', () => {
    Object.keys(TaskCategories).forEach(function (key) {
      let id = TaskCategories[key].id
      TaskCategoryIds.splice(TaskCategoryIds.indexOf(id), 1)
      expect(TaskCategoryIds).not.toContain(id)
    })
  })

  it('CategoryGroup must exist in CategoryGroups object or be undefined', () => {
    Object.keys(SavingsGoalCategories).forEach(function (key) {
      let categoryGroup = SavingsGoalCategories[key].categoryGroup
      if (categoryGroup)
        expect(categoryGroupArray).toContain(categoryGroup)
    })

    Object.keys(WithdrawCategories).forEach(function (key) {
      let categoryGroup = WithdrawCategories[key].categoryGroup
      if (categoryGroup)
        expect(categoryGroupArray).toContain(categoryGroup)
    })

    Object.keys(DepositCategories).forEach(function (key) {
      let categoryGroup = DepositCategories[key].categoryGroup
      if (categoryGroup)
        expect(categoryGroupArray).toContain(categoryGroup)
    })

    Object.keys(TaskCategories).forEach(function (key) {
      let categoryGroup = TaskCategories[key].categoryGroup
      if (categoryGroup)
        expect(categoryGroupArray).toContain(categoryGroup)
    })
  })
})
