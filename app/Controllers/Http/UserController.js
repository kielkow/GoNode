'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request }) {
    const data = request.only(['username', 'email', 'password'])
    const adresses = request.input('adresses')

    const user = await User.create(data)

    await user.adresses().createMany(adresses)

    return user
  }
}

module.exports = UserController
