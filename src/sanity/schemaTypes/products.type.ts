export const Products = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        { name: 'name', type: 'string', title: 'Name' },
        { name: 'description', type: 'text', title: 'Description' },
        { name: 'image', type: 'url', title: 'Image' },
        { name: 'id', type: 'string', title: 'ID' },
        {
            name: 'features',
            type: 'array',
            title: 'Features',
            of: [{ type: 'string' }],
        },
        {
            name: 'dimensions',
            type: 'object',
            title: 'Dimensions',
            fields: [
                { name: 'width', type: 'string', title: 'Width' },
                { name: 'height', type: 'string', title: 'Height' },
                { name: 'depth', type: 'string', title: 'Depth' },
            ],
        },
        {
            name: 'category',
            type: 'object',
            title: 'Category',
            fields: [
                { name: 'name', type: 'string', title: 'Name' },
                { name: 'slug', type: 'string', title: 'Slug' },
            ],
        },
        { name: 'price', type: 'number', title: 'Price' },
        {
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string' }],
        },
    ],
};