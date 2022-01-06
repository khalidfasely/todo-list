import moment from 'moment';

export default [
    {
        id: '1',
        content: 'todo1',
        time: moment(0).format(),
        active: true,
        timeOfDeactive: ''
    }, {
        id: '5',
        content: 'todo2',
        time: moment(99).format(),
        active: true,
        timeOfDeactive: ''
    }, {
        id: '6',
        content: 'todo3',
        time: moment(95664).format(),
        active: false,
        timeOfDeactive: moment(97005).format()
    }
]