import dayjs from 'dayjs'

export const getFullName = (name) => {
    return `${name.first} ${name.last}`;
}

export const getFormattedDate = (value) => {
    return dayjs(value).format('DD/MM/YYYY');
}