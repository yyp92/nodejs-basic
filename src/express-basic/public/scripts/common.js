
$.ajax({
    url: '/api/list',
    success(result) {
        // let html = '<ul>'
        // $.each(result.data, (index, value) => {
        //     html += '<li>' + value + '</li>'
        // })
        // html += '</ul>'
        // $('#list').html(html)
        // const newData = JSON.parse(result)

        let templateStr = `
            <ul>
                {{each data}}
                    <li>{{$value}}</li>
                {{/each}}
            </ul>
        `

        // let render = template.render('<div>{{data}}</div>', {data: 100})
        // let render = template.render('./list.art', {data: 100})
        let html = template.render(templateStr, {
            data: result.data
        })

        $('#list').html(html)
    },
    error(err) {
        console.log('32', err)
    }
})