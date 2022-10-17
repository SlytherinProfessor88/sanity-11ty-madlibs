const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: 'ojvf7itd',
    dataset: 'production',
    apiVersion: '2021-06-07',
    useCdn: true

})

