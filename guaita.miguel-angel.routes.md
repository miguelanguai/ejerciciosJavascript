# Routes and URLs, instructions

De la raíz del sitio web con domainname "a" servido por HTTPS,
cuelga el siguiente árbol de directorios y ficheros:

```
├── a
│   ├── a
│   │   ├── a
│   │   │   ├── a.html
│   │   │   ├── b.html
│   │   │   ├── c.html
│   │   │   └── d.html
│   │   ├── b
│   │   │   ├── a.html
│   │   │   ├── b.html  <--(3)
│   │   │   ├── c.html
│   │   │   └── d.html
│   │   ├── c
│   │   │   ├── a.html
│   │   │   ├── b.html
│   │   │   ├── c.html
│   │   │   └── d.html
│   │   ├── d
│   │   │   ├── a.html
│   │   │   ├── b.html
│   │   │   ├── c.html
│   │   │   └── d.html
│   │   ├── a.html
│   │   ├── b.html
│   │   ├── c.html
│   │   └── d.html
│   ├── b
│   │   ├── a.html
│   │   ├── b.html  <--(4)
│   │   ├── c.html
│   │   └── d.html
│   ├── c
│   │   ├── a.html
│   │   ├── b.html
│   │   ├── c.html
│   │   └── d.html
│   ├── d
│   │   ├── a.html
│   │   ├── b.html
│   │   ├── c.html
│   │   └── d.html  <--(5)
│   ├── a.html
│   ├── b.html
│   ├── c.html <--(6)
│   └── d.html
├── b
│   ├── a
│   │   ├── a.html
│   │   ├── b.html
│   │   ├── c.html
│   │   └── d.html
│   ├── b
│   │   ├── a.html
│   │   ├── b.html
│   │   ├── c.html
│   │   └── d.html
│   ├── c
│   │   ├── a.html
│   │   ├── b.html
│   │   ├── c.html
│   │   └── d.html
│   ├── d
│   │   ├── a.html
│   │   ├── b.html
│   │   ├── c.html
│   │   └── d.html <--(7)
│   ├── a.html
│   ├── b.html
│   ├── c.html
│   └── d.html
├── a.html  <-- (1)
├── b.html
├── c.html  <-- (2)
└── d.html
```

En él, he marcado 7 ficheros (apuntándolos con números) entre paréntesis.

Se piden las siguientes URL references, lo más compactas posible según cada
indicación:

1. From (1), relative URL to (2)
   - Answer: https://a.html
2. From (1), relative URL to (7)
   - Answer: https:/b/d/d.html
3. From (1), absolute URL with implicit schema to (4): 
   - Answer: https://a/a/b/b.html
4. From (6), relative URL to (2)
   - Answer: https://../c.html
5. From (6), relative URL to (7)
   - Answer: https://../b/d/d.html
6. From (6), relative URL to (3)
   - Answer: https://a/b/b.html
7. From (6), relative URL to (6)
   - Answer: https://c.html
8. From (6), absolute URL with implicit authority to (4)
   - Answer: https://a/a/b/b.html
9. From (7), relative URL to (5)
   - Answer: https://../../a/d/d.html
10. From (7), relative URL to the fragment with id "c" of (6)
   - Answer: https://../../a/c.html?id=c
11. From (7), relative URL to the fragment with id "a" of (7)
   - Answer: https://d.html?id=a
12. From (7), absolute URL with implicit schema but with explicit port to (1)
   - Answer: https://../../a.html:82
13. From (7), complete absolute URL to (3)
   - Answer: https://../../a/a/b/b.html

## Deliver

- Deliver as indicated by the teacher this file filled with answers and
  renamed to:

  `first-surname.name.routes.md`

  - Use only ascii characters and kebab-case in the file name:
    - E.g. José Luís NÚÑEZ CLEMENTE will give:

      `nunez.jose-luis.routes.md`

