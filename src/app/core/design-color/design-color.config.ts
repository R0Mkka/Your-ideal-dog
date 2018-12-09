import { ColorClasses } from 'src/app/dataTypes/colorClasses';

const redClasses: ColorClasses = {
    workspace: 'workspace-red',
    text: 'text-red',
    button: 'button-red',
    spinner: 'loading-spinner-red',
    color: 'red',
    colorRGBA: 'rgba(205, 53, 53, .9)'
}

const greenClasses: ColorClasses = {
    workspace: 'workspace-green',
    text: 'text-green',
    button: 'button-green',
    spinner: 'loading-spinner-green',
    color: 'green',
    colorRGBA: 'rgba(59, 201, 59, .9)'
}

const blueClasses: ColorClasses = {
    workspace: 'workspace-blue',
    text: 'text-blue',
    button: 'button-blue',
    spinner: 'loading-spinner-blue',
    color: 'blue',
    colorRGBA: 'rgba(59, 98, 201, .9)'
}

const purpleClasses: ColorClasses = {
    workspace: 'workspace-purple',
    text: 'text-purple',
    button: 'button-purple',
    spinner: 'loading-spinner-purple',
    color: 'purple',
    colorRGBA: 'rgba(242, 95, 219, .9)'
}

export const classesSet = {
    redClasses,
    greenClasses,
    blueClasses,
    purpleClasses
}