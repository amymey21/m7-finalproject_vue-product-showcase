#Vue Product Showcase – Final Project

📦 Instalación y ejecución

1. Clonar el repositorio

git clone https://github.com/usuario/m7-finalproject_vue-product-showcase.git
cd m7-finalproject_vue-product-showcase

2. Instalar dependencias

npm install

3. Ejecutar en desarrollo

npm run serve

La aplicación estará disponible en http://localhost:8080.

4. Ejecutar pruebas unitarias

npm run test:unit

5. Ejecutar pruebas E2E con Cypress

npm run test:e2e

Selecciona el archivo product-filter.cy.js para validar el filtrado de productos.

⚙️ ##Justificaciones técnicas

Vue 3 + Composition API
Se eligió Vue 3 por su sintaxis moderna y mejor rendimiento. La Composition API permite organizar la lógica de estado y reactividad de forma más clara y reutilizable.

Vuex para gestión de estado
Se utilizó Vuex para centralizar el estado de productos, filtros y favoritos. Esto asegura consistencia en toda la SPA y facilita pruebas unitarias al poder manipular directamente el estado.

Vuetify como librería UI
Se integró Vuetify para lograr un diseño profesional y responsivo sin necesidad de construir componentes visuales desde cero. Se usaron stubs en las pruebas para evitar bloqueos de Jest.

Pruebas unitarias con Jest + Vue Test Utils
Se implementaron pruebas en ProductCard.spec.js y ProductList.spec.js para validar renderizado de props, estados de carga, error y lista vacía. Esto garantiza que cada componente cumpla su responsabilidad.

Pruebas E2E con Cypress
Se añadieron pruebas end-to-end (product-filter.cy.js) para validar el flujo completo de usuario: carga inicial, filtrado por categoría y manejo de lista vacía. Cypress permite simular interacción real en el navegador.

Arquitectura modular y escalable
Los componentes (ProductCard, ProductList, FilterBar) se diseñaron de forma desacoplada, facilitando su reutilización y mantenimiento. La lógica de filtrado se mantiene en el store, asegurando separación de responsabilidades.

Documentación y limpieza de pruebas
Se eliminaron archivos de prueba y fixtures obsoletos (product.filter.test.js, products.json) para mantener un entorno ordenado y congruente con el proyecto actual.

🔮 Reflexión sobre migración a Nuxt o Quasar

Durante el desarrollo de este proyecto se optó por Vue 3 + Vuex + Vuetify, priorizando simplicidad y cumplimiento de los requisitos del bootcamp. Sin embargo, en un escenario de evolución futura, es importante considerar frameworks como Nuxt o Quasar:

Nuxt
Ofrece renderizado del lado del servidor (SSR), generación estática y optimización automática de rutas. Sería una buena opción si el objetivo principal fuera mejorar el SEO, el rendimiento inicial y la integración con APIs en proyectos web de gran escala.

Quasar
Destaca por su enfoque multiplataforma: con un mismo código base en Vue se pueden generar aplicaciones web, móviles (Cordova/Capacitor) y de escritorio (Electron). Esto lo convierte en una alternativa ideal si el proyecto busca expandirse más allá del navegador y ofrecer experiencias nativas en distintos dispositivos.

👉 En este caso, aunque no se implementó por tiempo y complejidad, la elección futura sería Quasar, ya que permite mantener la lógica de Vue y al mismo tiempo escalar hacia aplicaciones multiplataforma sin reescribir la base del proyecto.

🚀 Conclusión

Este proyecto demuestra el uso de Vue 3, Vuex, Vuetify, Jest y Cypress en un flujo completo de desarrollo frontend: desde la construcción modular de componentes hasta la validación con pruebas unitarias y E2E. La arquitectura y las decisiones técnicas priorizan claridad, escalabilidad y confiabilidad, con una visión futura hacia Quasar para lograr un producto multiplataforma.
