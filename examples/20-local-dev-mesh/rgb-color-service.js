var Seneca = require('seneca')
var Service = Seneca({tag: 'rgb'})

Service.use('../logic/rgb')

Service.use('../..', {
  pin: 'role:color,format:rgb',
  bases: ['127.0.0.1']
})

Service.ready(function (error) {
  if (error) {
    console.error(error)
    this.close()
    process.exit(1)
  }

  var seneca = this
  console.log('rgb', seneca.id)
})
