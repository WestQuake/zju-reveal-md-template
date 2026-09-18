# zju-reveal-md-template

A clean `reveal-md` slide template for Zhejiang University presentations.

All content in `main.md` is generic placeholder copy. Replace the text and
illustrations with your own content while keeping the layout containers.

## Requirements

- Node.js
- `make`
- npm (used automatically on the first build)

## Use

```sh
make live
make build
```

The local reveal-md runtime is kept in `.vendor/reveal-md`; its generated
`node_modules` directory is ignored and installed automatically when needed.
