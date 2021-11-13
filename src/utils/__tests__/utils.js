import { getFormattedDate, getFullName } from "../utils"

test('should return full name', () => {
    const name = {
        first: 'Wilmar',
        last: 'Oliveira'
    }

    const fullName = getFullName(name)
    expect(fullName).toEqual('Wilmar Oliveira')
})

test('should return correct formatted date', () => {
    const currentDate = '2021-01-01'

    const formattedDate = getFormattedDate(currentDate)
    expect(formattedDate).toEqual('01/01/2021')
})