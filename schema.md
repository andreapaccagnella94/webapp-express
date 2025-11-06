# DB Schema

il tema sarà un di `film` in cui si potranno lasciare `recensioni` pubbliche.

DB Name : movies_db

## Tables

- movies
- reviews

## Table : Movies

- id INT AI PK (UN uniside -> solo numeri positivi)
- title VARCHAR(255) NOTNULL
- director VARCHAR(255) NOTNULL
- genre VARCHAR(255) NULL
- release_year YEAR NULL
- abstract TEXT(500) NULL
- image VARCHAR(255) NULL || *DEFAULT('placehold.co/')
- created_at TIMESTAMP (DATETIME DEFAULT(NOW()))
- updated_at TIMESTAMP (DATETIME DEFAULT(NOW()))

## Table : Reviews

- id INT AI PK (UN uniside -> solo numeri positivi)
- movie_id INT FK NOTNULL (one to many)
- name VARCHAR(255) (DEFAUKT ('Anonymus'))
- vote TYNYINT NOTNULL
- text TEXT(500) NULL
- created_at TIMESTAMP (DATETIME DEFAULT(NOW()))
- updated_at TIMESTAMP (DATETIME DEFAULT(NOW()))