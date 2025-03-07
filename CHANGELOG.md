# Changelog

          All notable changes to this project will be documented in this file.
          See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.4.3](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.4.2...v3.4.3) (2021-05-26)


### Bug Fixes

* **deps:** update dependency aws4-axios to v2.3.4 ([61772f3](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/61772f35385ae6df18a4bd4b456ccab4d1b336a2))

## [3.4.2](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.4.1...v3.4.2) (2021-05-20)


### Bug Fixes

* export all enums from root ([19eb88c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/19eb88cd5d9dc58376bf23aa2a072da2fe960ff1))

## [3.4.1](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.4.0...v3.4.1) (2021-05-19)


### Bug Fixes

* change rate limit value as a number ([c994ef4](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/c994ef45254facc27a4ce8801aa69f3de0a44869))

# [3.4.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.3.0...v3.4.0) (2021-05-19)


### Features

* attempt to get rate limit value ([234d12c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/234d12cc1c5959e1ead6603eeabe722ff4016882))

# [3.3.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.2.0...v3.3.0) (2021-05-19)


### Features

* return a list of error responses in vendor direct fulfillment orders api ([493598b](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/493598bb23e7bc0ca1605cb3737b336dd52097a0))

# [3.2.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.1.0...v3.2.0) (2021-05-13)


### Features

* feat: update usage plan rates and rate tables in orders, product fees, product pricing ([1f9d563](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/1f9d5638837a73e3cdc1c705a5add2ea9c1ea49c))

# [3.1.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v3.0.0...v3.1.0) (2021-05-05)


### Features

* adds vendor models ([57ef4a6](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/57ef4a67e6606ede4ec9cd44d619a4022efaa422))

# [3.0.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v2.0.0...v3.0.0) (2021-04-27)


### Code Refactoring

* re-generate api client name using model directory name to prevent duplication ([05e5502](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/05e550208303760d7d7d167ee64e008919dce16a)), closes [#79](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/79)


### Reverts

* stable api versions ([461ec43](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/461ec43fa4442be2aee0018c8575ac7eb2d29315))


### BREAKING CHANGES

*

# [2.0.0](https://github.com/ScaleLeap/selling-partner-api-sdk/compare/v1.0.0...v2.0.0) (2021-04-19)


### Features

* update api models ([ad5fc5c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/ad5fc5c8c025c173c65f2c77378019c62c88785b))


### BREAKING CHANGES

* * re-generate api models
* add token api client

# 1.0.0 (2021-03-25)


### Bug Fixes

* api configuration parameters's properties ([dc2da96](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/dc2da9659b3e7cccdc1221fcc74d46998501b913))
* export combine schemas ([374f532](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/374f532c3d30ea0e926bf00a9bb0689ea37edab3))
* remove decoder from src folder ([10f3b46](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/10f3b46d34e01419824cbe7b0e16bc3b1dc851cc))
* remove helpers exporting ([96d5c36](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/96d5c36e1c9600f29b0b71970fc591eae56892a0))
* remove unnecessary and private stuff exporting ([4362ddc](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/4362ddca9f32fb31b8dd4249b62c78f07a0ad32d))
* use generator v4.1.3 to fix build error ([c324f6a](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/c324f6ad3d9c279efb47d4e040ed4e98ac3f5481))
* use join method on set collection of api model code ([2d063d6](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/2d063d60db2643a0fef8693c3194769081d8ce22))
* using generator v5.0.1 with type mapping to resolve build issue ([a8c3463](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/a8c34639e620f349f63607b6f406eef1e51d275c))


### Features

* add isSandbox option ([644159c](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/644159c5d9a26e7c4ace21c6c0d4ae0c9ea29616))
* allow user set roleArn ([7159ec7](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/7159ec75295f301b341717dc2c0d31041789d4ed))
* automate client version number dumps ([e21d3d6](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/e21d3d6c19fa2303f2dea6386a7d0ec3396401c5))
* check new commits before re-generate models (GHORG-38) ([03c4ecb](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/03c4ecb2b69d48084fb469bb7c89f80be4d542ff))
* implement decoder and scripts to generate api model code commands ([0abe7ee](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/0abe7eecf557272e1e2d5a059b27b6bfd3d9c48a))
* init api models ([624eed9](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/624eed98b67b298ac512002ac8e34b45d6b391a4))
* Write glue code to link generated code (GHORG-15) ([#9](https://github.com/ScaleLeap/selling-partner-api-sdk/issues/9)) ([994d0ea](https://github.com/ScaleLeap/selling-partner-api-sdk/commit/994d0eac1c53c8676378e59053b9e6cac1eb8f4c))
