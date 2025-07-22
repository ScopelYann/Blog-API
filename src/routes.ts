import { Router } from "express";
import UserController from "./app/controllers/UserController"
import SessionController from "./app/controllers/SessionController"
import { Validation } from "./middlewares/validator.middleware";
import { UserRegisterDTO } from "./dtos/dtos.user"
import { SchemaDTO } from "./dtos/dtos.session"
import { ParamsType } from "./middlewares/validator.middleware"
import multer from "multer";
import multerConfig from "./config/multerConfig.mts"
export const baseRoutes = Router();

const upload = multer(multerConfig)



baseRoutes.post("/user", upload.single("file"), Validation({
    schema: UserRegisterDTO,
    type: ParamsType.BODY
}), UserController.store)
baseRoutes.post("/session", Validation({
    schema: SchemaDTO,
    type: ParamsType.BODY
}), SessionController.store)

/*
    - Repository de Registro de Usuario completo(UserController) - OK
    - Service de Registro de Usuario completo(UserController) - OK
    - Adicionar Repository e Service de SessionController
    - Adicionar na criação de usuario{
        - foto de avatar
        users (id, name, email, password_hash, role, avatar_url, created_at)
        além das que eu coloquei, tenho que colocar avatar_url sendo opcional na hora da criação e configuração tambem

    - Tabela para article 
    - Colunas {

    - Id da publicação para usar em upgrades e etc

    - Title
    
    - Image
    
    - excerpt - Descrição curta para a exibição do artigo
    
    - Contends - Conteudo do artigo
    
    - UrlFriendly - Uma URL para o acesso ao artigo, geralmente
    --------------- o Titulo sem os espaços. "http://Blog/article/futuro-desenvolvimento-2024"
    
    - Status - e Status da publicação se será visivel/publicado ou não visivel ao publico
    
    - author_id - Autor da publicação
    
    - Category_id - Usada para filtrar as publicações com mesma categoria - {

            1. Filtragem por Categoria:

            Buscar todos os artigos de "tech": WHERE category_id = 1
            Buscar todos os artigos de "comida": WHERE category_id = 2

            2. Organização do Site:

            URLs como: http://blog/categoria/tech/
            Páginas dedicadas por categoria
            Menus de navegação organizados

            3. Funcionalidades Avançadas:

            Artigos relacionados da mesma categoria
            Contadores de artigos por categoria
            Filtros combinados (categoria + status + autor)
            }
    }
    }
*/