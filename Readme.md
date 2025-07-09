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
