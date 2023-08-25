export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'overview',
            title: 'Overview',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        },
    ],

}