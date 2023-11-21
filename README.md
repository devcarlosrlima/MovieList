# Projeto Movie List

## Techs usadas no projeto
- React js
- API
- Axios
- Sass
- JavaScript

## Resumo

MovieList criada com intuito de aperfeiçoar a técnica de consumo de API, foi utilizado framework React como tech principal com o auxilio do axios para a utilização de algumas funçoes para melhor funcionamento da pagina como a listada abaixo:

 
    static getMoviesDetails(id){
        return axios(withBaseUrl(`movie/${id}`));
    }

    static searchMovie(movie){
        return axios(withBaseUrl("search/movie")+ `&query=${movie}`)
    }
}   


## Estilização

Para estilização foi utilizado Sass pela sua facilidade e eficiência no codigo devido a possibilidade de aninhamento



    &:hover{
        box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.4);
        transform: translateY(-5px);
    }

    .movie-image{
        position: relative;
        background-color: #303030;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &::before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.6) 0%,
                rgba(0, 0, 0, 0.2)100%
            );
        }
    }

    .movie-description{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #1d1d1d;
        padding: 15px;

        h3 {
            margin: 0;
            font-size: 1.2rem;
            color: white;
        }

        .btn-details{
            display: inline-block;
            margin-top: 10px;
            padding: 10px 24px;
            color: white;
            background-color: #0c70f2;
            border-radius: 5px;
            text-decoration: none;

            &:hover{
                background-color: #303030;
            }
        }
    }
}
