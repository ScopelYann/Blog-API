Tabelas principais:

    users (id, name, email, password_hash, role, avatar_url, created_at)
    articles (id, title, content, excerpt, author_id, featured_image, status, created_at, updated_at)
    comments (id, article_id, user_id, content, parent_id, created_at)
    categories (id, name, slug, description)
    article_categories (article_id, category_id)
    likes (id, user_id, article_id, created_at)

Backend APIs necessárias:

    Autenticação (login, register, logout, refresh token)
    CRUD de artigos (create, read, update, delete)
    Sistema de comentários (criar, listar, responder)
    Upload de imagens
    Sistema de likes/curtidas
    Filtros e busca de artigos




descartados 


//id: user?.id,
    // email,
    // password,
    // admin: user?.admin,
    // token: jwt.sign({ id: user.id }, auth.secret, {
    //   expiresIn: '5d'
    // })



    // function EmailOrPasswordIncorrect(): Response {
    //   return res
    //     .status(401)
    //     .json({ message: "Email Or Password Incorrect" })
    // }

    // if (!isValid) {
    //   EmailOrPasswordIncorrect()
    // }

    // const user: string | any = await UserModel.findOne({
    //   where: {
    //     email,
    //   }
    // });

    // if (!user) {
    //   EmailOrPasswordIncorrect()
    // }

    // const IsSamePassword = await user.comparePassword(password)

    // if (!IsSamePassword) {
    //   EmailOrPasswordIncorrect()
    // }

    // const {email, password} = req.body