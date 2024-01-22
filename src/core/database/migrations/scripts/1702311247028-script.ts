import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {

try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('a02de28f-2e55-4927-9fe9-7ba838e3b285', '7Katelin_Rosenbaum@yahoo.com', 'subnecto', 'https://i.imgur.com/YfJQV5z.png', 'ratione', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('c5b07d74-38dc-42e2-9bba-893af728c858', '13Alden_Metz@hotmail.com', 'adversus desparatus', 'https://i.imgur.com/YfJQV5z.png', 'tenetur cito', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('2d0eb2d9-a8dc-425d-8ce1-5e3a34e14d67', '19Maverick.Cremin9@gmail.com', 'aliquam cuppedia', 'https://i.imgur.com/YfJQV5z.png', 'taedium', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('8dae877f-d8ae-421d-aea7-c8d95683911c', '25Alyce_Swift@hotmail.com', 'territo hic', 'https://i.imgur.com/YfJQV5z.png', 'venia speculum', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('1553c8d9-1ab3-4fc5-a448-78ae76cd55a7', '31Sammy_Baumbach@hotmail.com', 'est volva illo', 'https://i.imgur.com/YfJQV5z.png', 'excepturi', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('e5623510-49ec-4ecf-b0c0-7c7020612ac2', '37Al.Donnelly9@hotmail.com', 'celo cresco', 'https://i.imgur.com/YfJQV5z.png', 'comparo eligendi', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('cd0656dc-e7d1-4d17-924d-eb0c476342d9', '43Donato.Weissnat73@yahoo.com', 'suscipit audeo administratio', 'https://i.imgur.com/YfJQV5z.png', 'clibanus basium', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('08568c84-6c95-4108-a4cf-b7b7984ace1b', '49Izaiah_Fritsch52@yahoo.com', 'chirographum taedium eligendi', 'https://i.imgur.com/YfJQV5z.png', 'sperno', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('e0edefcd-f6c8-4876-a068-e0c242fbc229', '55Westley_Wilkinson@gmail.com', 'consectetur officiis', 'https://i.imgur.com/YfJQV5z.png', 'cinis', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "business_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('0d8d952f-ef81-4ce3-a407-e844480aaaa8', '61Lavada_Prosacco49@gmail.com', 'tardus corrumpo', 'https://i.imgur.com/YfJQV5z.png', 'angulus nam', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "business_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('2f440773-5889-4631-891b-cdee74e60e3a', '67Berta15@yahoo.com', 'pecus adeptio', 'https://i.imgur.com/YfJQV5z.png', 'super suus', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "business_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('720e754d-2338-4ac9-9377-0d914b1778a4', '73Brisa_Mueller66@gmail.com', 'volva', 'https://i.imgur.com/YfJQV5z.png', 'facere colligo', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "business_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('019dc0a6-bab4-4db7-b7c2-f0f023ebec8c', '79Gennaro_Wehner@gmail.com', 'contra accendo', 'https://i.imgur.com/YfJQV5z.png', 'coadunatio', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "business_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('79a2abd3-fef2-4cf6-a66f-9fa7233671f6', '85Elmira1@yahoo.com', 'verecundia accusamus', 'https://i.imgur.com/YfJQV5z.png', 'altus vulgivagus conitor', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "business_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('8d4ad3c6-aaf1-4edb-8a6d-eb2bee49c8b9', '91Elvera_Strosin@yahoo.com', 'studio usitas similique', 'https://i.imgur.com/YfJQV5z.png', 'somnus apparatus', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "business_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('d8957ba0-af73-49a1-ae89-83b903f833d3', '97Lottie.Hodkiewicz78@yahoo.com', 'vix', 'https://i.imgur.com/YfJQV5z.png', 'spes', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "business_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('c290ceb9-b9aa-4e89-952a-7ccb0ec2c044', '103Marian_Reilly38@yahoo.com', 'tepesco delicate', 'https://i.imgur.com/YfJQV5z.png', 'ultio tepidus', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "business_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('d31e5da4-242d-47ee-ab5b-81c0a4d286a6', '109Francisco_Ondricka@gmail.com', 'acerbitas votum vicinus', 'https://i.imgur.com/YfJQV5z.png', 'vilicus subseco', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "business_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('a79c465e-81c8-47fe-9281-f37058be3a4b', '115Simone58@hotmail.com', 'somnus celer valetudo', 'https://i.imgur.com/YfJQV5z.png', 'talio tamdiu carmen', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "client_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('13356a43-752b-4065-b60f-61ff2173a7d0', '121Shea_Kutch69@hotmail.com', 'aperte ceno', 'https://i.imgur.com/YfJQV5z.png', 'nam', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "client_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('871a9970-e78d-4fef-8529-bc3cd756601b', '127Cale35@yahoo.com', 'venio confido quaerat', 'https://i.imgur.com/YfJQV5z.png', 'adamo denuncio', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "client_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('5a155c92-3ccf-48a6-a2c3-e1d07dd2df60', '133Giovanni76@yahoo.com', 'coniecto umquam', 'https://i.imgur.com/YfJQV5z.png', 'quo excepturi', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "client_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('557fdb90-fe46-48d3-9156-78a4130dd752', '139Kathryne.OConnell-Mertz5@gmail.com', 'termes', 'https://i.imgur.com/YfJQV5z.png', 'via quaerat vindico', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "client_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('db681185-8902-48ce-88a2-7da5f8008bbb', '145Toby_Beier74@hotmail.com', 'carcer calculus amet', 'https://i.imgur.com/YfJQV5z.png', 'crinis circumvenio capillus', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "client_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('97366759-f170-40ed-917c-592be8b6b8f2', '151Vicky_Glover@yahoo.com', 'delego rerum', 'https://i.imgur.com/YfJQV5z.png', 'repudiandae deduco', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "client_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('206f471e-4434-48b5-8bb6-3f5817f5e254', '157Denis_Balistreri62@gmail.com', 'deserunt', 'https://i.imgur.com/YfJQV5z.png', 'consequuntur totidem', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "client_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('6453db8b-6c5e-434e-a1a3-14531b5f58c2', '163Josefa_Corkery@gmail.com', 'astrum adaugeo tui', 'https://i.imgur.com/YfJQV5z.png', 'cupiditas', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "client_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('818f63ae-33fb-4ba7-9695-261741f88e88', '169Korey_Sanford92@hotmail.com', 'torqueo vigor', 'https://i.imgur.com/YfJQV5z.png', 'conicio', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "client_user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('8ea19794-d302-4728-9004-d8ed14e14a1a', '175Summer_Nicolas-Ziemann70@hotmail.com', 'amicitia amiculum virtus', 'https://i.imgur.com/YfJQV5z.png', 'conventus capto', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "profile" ("id", "details", "userId") VALUES ('7261b7a3-33b0-4236-828f-46072dd5c2e3', 'approbo quaerat esse', '97366759-f170-40ed-917c-592be8b6b8f2');
INSERT INTO "profile" ("id", "details", "userId") VALUES ('0df4617c-d5a5-4abf-a10f-773d8128649b', 'minima', '557fdb90-fe46-48d3-9156-78a4130dd752');
INSERT INTO "profile" ("id", "details", "userId") VALUES ('78da10bb-cb09-451a-b947-f7ef5d097bb5', 'pauci varietas vulgo', '5a155c92-3ccf-48a6-a2c3-e1d07dd2df60');
INSERT INTO "profile" ("id", "details", "userId") VALUES ('158f9b2a-45d9-47d3-a8fd-67110cf03686', 'ullus comis ipsam', '6453db8b-6c5e-434e-a1a3-14531b5f58c2');
INSERT INTO "profile" ("id", "details", "userId") VALUES ('6539f2df-5646-4cdf-a133-103a058cc418', 'quo cunctatio depromo', '5a155c92-3ccf-48a6-a2c3-e1d07dd2df60');
INSERT INTO "profile" ("id", "details", "userId") VALUES ('aa8bd836-f1a8-4661-8bd1-f012b09f748d', 'vinco arx', '206f471e-4434-48b5-8bb6-3f5817f5e254');
INSERT INTO "profile" ("id", "details", "userId") VALUES ('e20b9e47-b0b2-4998-a4e3-c3a04a1be083', 'sub sortitus templum', 'db681185-8902-48ce-88a2-7da5f8008bbb');
INSERT INTO "profile" ("id", "details", "userId") VALUES ('bf836db3-f674-4b06-81a5-86bf7ad3c386', 'ullam', '557fdb90-fe46-48d3-9156-78a4130dd752');
INSERT INTO "profile" ("id", "details", "userId") VALUES ('7d4218ed-f143-43a8-928e-01767c65e1bd', 'videlicet appono', '818f63ae-33fb-4ba7-9695-261741f88e88');
INSERT INTO "profile" ("id", "details", "userId") VALUES ('2bc89b48-7948-45d0-a3e0-337fda19078d', 'statua vigilo', '206f471e-4434-48b5-8bb6-3f5817f5e254');

INSERT INTO "business" ("id", "name", "city", "type", "ownerId") VALUES ('c73056e4-049c-46d9-9369-66e779264677', 'vel amplus comedo', 'a', 'adopto sonitus sponte', 'd8957ba0-af73-49a1-ae89-83b903f833d3');
INSERT INTO "business" ("id", "name", "city", "type", "ownerId") VALUES ('1492aeb2-e759-4942-a14e-d1edc6510fff', 'admoneo demergo', 'sol constans explicabo', 'aer vetus damno', '0d8d952f-ef81-4ce3-a407-e844480aaaa8');
INSERT INTO "business" ("id", "name", "city", "type", "ownerId") VALUES ('7038237d-d61a-4a02-bdca-0cf0902503df', 'nisi', 'nihil vesica explicabo', 'animi', '0d8d952f-ef81-4ce3-a407-e844480aaaa8');
INSERT INTO "business" ("id", "name", "city", "type", "ownerId") VALUES ('7efa2f85-ae42-4eb5-b81c-2615f992fc64', 'vitium', 'pecco libero', 'impedit coaegresco', '0d8d952f-ef81-4ce3-a407-e844480aaaa8');
INSERT INTO "business" ("id", "name", "city", "type", "ownerId") VALUES ('4cccb6c4-d953-4b19-8707-5bca23ea9097', 'valetudo laboriosam vobis', 'temperantia', 'corpus coerceo', 'd8957ba0-af73-49a1-ae89-83b903f833d3');
INSERT INTO "business" ("id", "name", "city", "type", "ownerId") VALUES ('b1805476-728b-4623-8303-98b3e5cb3741', 'demoror tandem', 'statua cattus', 'cumque', 'a79c465e-81c8-47fe-9281-f37058be3a4b');
INSERT INTO "business" ("id", "name", "city", "type", "ownerId") VALUES ('33db2401-eeac-4127-9cab-0b1e057db08b', 'aetas', 'titulus asporto', 'vespillo molestiae demitto', 'd31e5da4-242d-47ee-ab5b-81c0a4d286a6');
INSERT INTO "business" ("id", "name", "city", "type", "ownerId") VALUES ('d681fe63-7ccd-4007-ba7d-e4393872c1fe', 'ambitus trado', 'ambitus', 'doloremque talus crudelis', '8d4ad3c6-aaf1-4edb-8a6d-eb2bee49c8b9');
INSERT INTO "business" ("id", "name", "city", "type", "ownerId") VALUES ('75ad74ca-e448-4557-89bf-55db48c91758', 'venustas', 'vulgivagus caute', 'conforto adsidue aetas', '2f440773-5889-4631-891b-cdee74e60e3a');
INSERT INTO "business" ("id", "name", "city", "type", "ownerId") VALUES ('1c7c28e0-92d0-4e47-bc7b-d856020b15fd', 'terminatio vita artificiose', 'hic spero', 'corona tot', 'a79c465e-81c8-47fe-9281-f37058be3a4b');

INSERT INTO "service" ("id", "name", "description", "businessId") VALUES ('b38b7cc1-3aa4-48be-af84-8928ccd0d189', 'subito alias attero', 'cognatus', '1492aeb2-e759-4942-a14e-d1edc6510fff');
INSERT INTO "service" ("id", "name", "description", "businessId") VALUES ('3ec9ea5e-028c-43cc-bba6-9bce129f16a9', 'surgo defungo', 'clementia', '4cccb6c4-d953-4b19-8707-5bca23ea9097');
INSERT INTO "service" ("id", "name", "description", "businessId") VALUES ('beb50087-29f4-4d82-803c-26dbd76f9be0', 'adhaero curiositas', 'impedit pectus', '1c7c28e0-92d0-4e47-bc7b-d856020b15fd');
INSERT INTO "service" ("id", "name", "description", "businessId") VALUES ('daa6c171-e2d4-463d-859b-7870197010ee', 'abeo iste', 'decumbo', 'b1805476-728b-4623-8303-98b3e5cb3741');
INSERT INTO "service" ("id", "name", "description", "businessId") VALUES ('5b8b0234-107d-4b85-bfd4-a62555eff214', 'volo baiulus', 'explicabo quaerat ago', 'c73056e4-049c-46d9-9369-66e779264677');
INSERT INTO "service" ("id", "name", "description", "businessId") VALUES ('1a640aea-6a86-49ef-b3b7-6e6443f5d202', 'vomica ipsam', 'hic animadverto', '7038237d-d61a-4a02-bdca-0cf0902503df');
INSERT INTO "service" ("id", "name", "description", "businessId") VALUES ('9fcb2af7-72e9-4b96-a418-e6366c8f2c8e', 'comedo', 'umbra ver', '1492aeb2-e759-4942-a14e-d1edc6510fff');
INSERT INTO "service" ("id", "name", "description", "businessId") VALUES ('12b54f05-7227-4c2f-a05d-a71868be0d51', 'subiungo vaco casus', 'adfero', 'b1805476-728b-4623-8303-98b3e5cb3741');
INSERT INTO "service" ("id", "name", "description", "businessId") VALUES ('5c36aa9b-240e-49cf-8ab2-87cd108d5c2a', 'officiis adduco', 'ante aestus', '33db2401-eeac-4127-9cab-0b1e057db08b');
INSERT INTO "service" ("id", "name", "description", "businessId") VALUES ('05772489-e6e7-4362-9208-cce12aeae35e', 'cursus', 'ars officiis doloribus', '7038237d-d61a-4a02-bdca-0cf0902503df');

INSERT INTO "appointment" ("id", "time", "date", "businessId", "serviceId") VALUES ('9edb66b4-1726-4f50-85fd-9e8f82cfa85e', 'conservo utrimque', '2023-11-20T14:55:55.744Z', '1c7c28e0-92d0-4e47-bc7b-d856020b15fd', '12b54f05-7227-4c2f-a05d-a71868be0d51');
INSERT INTO "appointment" ("id", "time", "date", "businessId", "serviceId") VALUES ('504eae2f-1164-4d8b-b391-94c552ed1a95', 'vapulus verto casus', '2023-05-08T22:46:08.386Z', 'c73056e4-049c-46d9-9369-66e779264677', '9fcb2af7-72e9-4b96-a418-e6366c8f2c8e');
INSERT INTO "appointment" ("id", "time", "date", "businessId", "serviceId") VALUES ('a0ab83c6-4b31-44af-aa40-4bbe5e67398a', 'amicitia ambulo', '2023-08-01T14:46:06.471Z', '1492aeb2-e759-4942-a14e-d1edc6510fff', '1a640aea-6a86-49ef-b3b7-6e6443f5d202');
INSERT INTO "appointment" ("id", "time", "date", "businessId", "serviceId") VALUES ('2f93e09c-e0fa-45b2-8b14-9f9d8d64fdf3', 'desparatus certus', '2024-09-01T01:50:53.197Z', '1492aeb2-e759-4942-a14e-d1edc6510fff', 'b38b7cc1-3aa4-48be-af84-8928ccd0d189');
INSERT INTO "appointment" ("id", "time", "date", "businessId", "serviceId") VALUES ('e8908904-ed28-4f80-abd9-016ab2d2fb34', 'vobis tertius suggero', '2024-10-22T22:35:37.122Z', 'c73056e4-049c-46d9-9369-66e779264677', '1a640aea-6a86-49ef-b3b7-6e6443f5d202');
INSERT INTO "appointment" ("id", "time", "date", "businessId", "serviceId") VALUES ('d409bfaf-e3bb-418e-bbdd-9c7393eb3ed2', 'maxime desino artificiose', '2024-12-11T13:35:58.425Z', 'd681fe63-7ccd-4007-ba7d-e4393872c1fe', '9fcb2af7-72e9-4b96-a418-e6366c8f2c8e');
INSERT INTO "appointment" ("id", "time", "date", "businessId", "serviceId") VALUES ('f0701830-5032-4f78-ba19-dea9f2375195', 'arceo tribuo', '2023-08-08T08:02:17.373Z', 'c73056e4-049c-46d9-9369-66e779264677', 'b38b7cc1-3aa4-48be-af84-8928ccd0d189');
INSERT INTO "appointment" ("id", "time", "date", "businessId", "serviceId") VALUES ('94a0924d-28e2-469d-b1dd-e73d8f80c1d6', 'curto adulatio', '2023-11-03T23:23:20.799Z', 'd681fe63-7ccd-4007-ba7d-e4393872c1fe', '05772489-e6e7-4362-9208-cce12aeae35e');
INSERT INTO "appointment" ("id", "time", "date", "businessId", "serviceId") VALUES ('2f6bda4c-8c8c-451a-a804-9ebfb8b42df2', 'volup ager totus', '2023-08-25T19:22:39.801Z', '1492aeb2-e759-4942-a14e-d1edc6510fff', 'daa6c171-e2d4-463d-859b-7870197010ee');
INSERT INTO "appointment" ("id", "time", "date", "businessId", "serviceId") VALUES ('eedfb59c-193f-4165-9244-d57f7b4ce082', 'ullam tergeo succurro', '2023-09-08T17:47:16.861Z', '7efa2f85-ae42-4eb5-b81c-2615f992fc64', '9fcb2af7-72e9-4b96-a418-e6366c8f2c8e');

INSERT INTO "booking" ("id", "status", "appointmentId", "userId") VALUES ('6976618d-a5fa-4714-aaa2-45cba6456ac9', 'celebrer anser amo', 'f0701830-5032-4f78-ba19-dea9f2375195', '871a9970-e78d-4fef-8529-bc3cd756601b');
INSERT INTO "booking" ("id", "status", "appointmentId", "userId") VALUES ('cb1b3356-68ae-4dbc-a9f0-ff3c424315ad', 'sumo', '2f6bda4c-8c8c-451a-a804-9ebfb8b42df2', '818f63ae-33fb-4ba7-9695-261741f88e88');
INSERT INTO "booking" ("id", "status", "appointmentId", "userId") VALUES ('b511a6df-8fd3-485c-a825-270d317ddc8c', 'texo surgo ater', '2f93e09c-e0fa-45b2-8b14-9f9d8d64fdf3', '13356a43-752b-4065-b60f-61ff2173a7d0');
INSERT INTO "booking" ("id", "status", "appointmentId", "userId") VALUES ('bb9f02da-88ac-4016-b1ff-0294461b89ef', 'atqui explicabo', '2f6bda4c-8c8c-451a-a804-9ebfb8b42df2', '6453db8b-6c5e-434e-a1a3-14531b5f58c2');
INSERT INTO "booking" ("id", "status", "appointmentId", "userId") VALUES ('56bad255-47ef-4275-9914-f2e747bf488f', 'apto', 'a0ab83c6-4b31-44af-aa40-4bbe5e67398a', '8ea19794-d302-4728-9004-d8ed14e14a1a');
INSERT INTO "booking" ("id", "status", "appointmentId", "userId") VALUES ('acacf362-e91b-4112-ba24-18b77185ddd6', 'contego substantia vehemens', 'f0701830-5032-4f78-ba19-dea9f2375195', '6453db8b-6c5e-434e-a1a3-14531b5f58c2');
INSERT INTO "booking" ("id", "status", "appointmentId", "userId") VALUES ('e5be2df1-eeab-4fcf-a1a8-68fde58ad108', 'totus', 'a0ab83c6-4b31-44af-aa40-4bbe5e67398a', '6453db8b-6c5e-434e-a1a3-14531b5f58c2');
INSERT INTO "booking" ("id", "status", "appointmentId", "userId") VALUES ('c0c35baf-3431-4ce0-9c34-63d7108f2354', 'absum aperio corrumpo', '9edb66b4-1726-4f50-85fd-9e8f82cfa85e', '871a9970-e78d-4fef-8529-bc3cd756601b');
INSERT INTO "booking" ("id", "status", "appointmentId", "userId") VALUES ('968c95cb-95bd-4a4e-9381-084b1b93830f', 'adstringo', 'a0ab83c6-4b31-44af-aa40-4bbe5e67398a', '557fdb90-fe46-48d3-9156-78a4130dd752');
INSERT INTO "booking" ("id", "status", "appointmentId", "userId") VALUES ('a691421d-f1f9-443d-b6f8-dcff43bca766', 'pax', '2f6bda4c-8c8c-451a-a804-9ebfb8b42df2', '13356a43-752b-4065-b60f-61ff2173a7d0');

INSERT INTO "favorite" ("id", "userId", "businessId") VALUES ('8ced771c-e68a-4c60-a693-85c6d40f79d8', '818f63ae-33fb-4ba7-9695-261741f88e88', '1c7c28e0-92d0-4e47-bc7b-d856020b15fd');
INSERT INTO "favorite" ("id", "userId", "businessId") VALUES ('c85572e1-7a5a-42a6-9bc6-ebb5ea54bd44', '557fdb90-fe46-48d3-9156-78a4130dd752', '7efa2f85-ae42-4eb5-b81c-2615f992fc64');
INSERT INTO "favorite" ("id", "userId", "businessId") VALUES ('1aeab1e8-23cf-4f46-92ba-80a33f95b8d3', '6453db8b-6c5e-434e-a1a3-14531b5f58c2', '1c7c28e0-92d0-4e47-bc7b-d856020b15fd');
INSERT INTO "favorite" ("id", "userId", "businessId") VALUES ('c538466a-8414-4be7-9032-6a5a9e103959', '5a155c92-3ccf-48a6-a2c3-e1d07dd2df60', 'c73056e4-049c-46d9-9369-66e779264677');
INSERT INTO "favorite" ("id", "userId", "businessId") VALUES ('f2a1758e-b223-4ca3-b981-9ccd6dc21554', '871a9970-e78d-4fef-8529-bc3cd756601b', '7038237d-d61a-4a02-bdca-0cf0902503df');
INSERT INTO "favorite" ("id", "userId", "businessId") VALUES ('1a125e41-2a1d-470d-a7b7-bfdc05b7a500', 'db681185-8902-48ce-88a2-7da5f8008bbb', '1c7c28e0-92d0-4e47-bc7b-d856020b15fd');
INSERT INTO "favorite" ("id", "userId", "businessId") VALUES ('9033331b-0af1-42d1-8aa0-71edd7b21158', '13356a43-752b-4065-b60f-61ff2173a7d0', 'b1805476-728b-4623-8303-98b3e5cb3741');
INSERT INTO "favorite" ("id", "userId", "businessId") VALUES ('cd4515ec-dfe0-4b9c-9f1b-209987e3a717', '6453db8b-6c5e-434e-a1a3-14531b5f58c2', '1c7c28e0-92d0-4e47-bc7b-d856020b15fd');
INSERT INTO "favorite" ("id", "userId", "businessId") VALUES ('7c0ab1cb-5fa2-4b26-9458-6f0eb6192569', '97366759-f170-40ed-917c-592be8b6b8f2', 'c73056e4-049c-46d9-9369-66e779264677');
INSERT INTO "favorite" ("id", "userId", "businessId") VALUES ('ed76dbfc-de4f-48e1-bca3-a8ef9c87bea2', '818f63ae-33fb-4ba7-9695-261741f88e88', 'c73056e4-049c-46d9-9369-66e779264677');

INSERT INTO "business_user_role" ("id", "role", "businessId", "userId") VALUES ('36db16f4-e778-4e2c-adc2-cb3c10aeabb2', 'sto sapiente', '7efa2f85-ae42-4eb5-b81c-2615f992fc64', 'd8957ba0-af73-49a1-ae89-83b903f833d3');
INSERT INTO "business_user_role" ("id", "role", "businessId", "userId") VALUES ('66c6a6b1-f21e-4086-bc81-a55a3881e375', 'absens reprehenderit', 'c73056e4-049c-46d9-9369-66e779264677', 'c290ceb9-b9aa-4e89-952a-7ccb0ec2c044');
INSERT INTO "business_user_role" ("id", "role", "businessId", "userId") VALUES ('f004f7e5-a091-4945-9ad7-54aa4a58e961', 'impedit circumvenio', '7038237d-d61a-4a02-bdca-0cf0902503df', 'a79c465e-81c8-47fe-9281-f37058be3a4b');
INSERT INTO "business_user_role" ("id", "role", "businessId", "userId") VALUES ('f31ec53d-072f-4caf-baea-462e69de68cd', 'aperiam', 'c73056e4-049c-46d9-9369-66e779264677', '8d4ad3c6-aaf1-4edb-8a6d-eb2bee49c8b9');
INSERT INTO "business_user_role" ("id", "role", "businessId", "userId") VALUES ('f75f8d23-b708-442f-86b9-0aba1d29f9bc', 'cuius', 'b1805476-728b-4623-8303-98b3e5cb3741', '2f440773-5889-4631-891b-cdee74e60e3a');
INSERT INTO "business_user_role" ("id", "role", "businessId", "userId") VALUES ('49a39f78-9fac-4b90-9783-96090d2d29f2', 'certus', '75ad74ca-e448-4557-89bf-55db48c91758', '019dc0a6-bab4-4db7-b7c2-f0f023ebec8c');
INSERT INTO "business_user_role" ("id", "role", "businessId", "userId") VALUES ('21a19bf7-209c-43ba-9568-06893255e850', 'consequatur corrumpo', '75ad74ca-e448-4557-89bf-55db48c91758', 'c290ceb9-b9aa-4e89-952a-7ccb0ec2c044');
INSERT INTO "business_user_role" ("id", "role", "businessId", "userId") VALUES ('7d6b981d-b857-4771-938d-2103df68c0a7', 'quas', '1492aeb2-e759-4942-a14e-d1edc6510fff', '720e754d-2338-4ac9-9377-0d914b1778a4');
INSERT INTO "business_user_role" ("id", "role", "businessId", "userId") VALUES ('c60b1876-2fa5-426a-ad36-b7c44bb9e3e8', 'vomito cervus', 'c73056e4-049c-46d9-9369-66e779264677', 'c290ceb9-b9aa-4e89-952a-7ccb0ec2c044');
INSERT INTO "business_user_role" ("id", "role", "businessId", "userId") VALUES ('e483d70d-d151-4aed-9923-81daf83b131b', 'adflicto tremo', 'b1805476-728b-4623-8303-98b3e5cb3741', '2f440773-5889-4631-891b-cdee74e60e3a');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('43ca00c5-a89f-4884-8cfb-682ea3a76aa2', 'solvo', 'repudiandae carmen', 'soleo convoco', '354Mossie.Kreiger16@hotmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '5a155c92-3ccf-48a6-a2c3-e1d07dd2df60');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('39f4b9c0-9ea4-4115-992c-6ca8928c709c', 'bellum pauper acquiro', 'caecus nobis', 'aptus tibi convoco', '361Luz_Pfannerstill33@gmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '8ea19794-d302-4728-9004-d8ed14e14a1a');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('1f7baa88-1233-447d-b373-de0bbf381b90', 'atrocitas', 'adficio', 'ocer arbor sodalitas', '368Nyasia_Collins9@gmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '5a155c92-3ccf-48a6-a2c3-e1d07dd2df60');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('3652aa3f-9cca-44b9-a235-635faef10003', 'celo tempora terga', 'accommodo virtus', 'speciosus', '375Eileen.Kuphal79@hotmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '13356a43-752b-4065-b60f-61ff2173a7d0');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('2dcbeb58-8cfa-464b-900e-da67cac27e3c', 'aeternus vir', 'doloremque venustas desidero', 'tempus', '382Aliza96@hotmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '6453db8b-6c5e-434e-a1a3-14531b5f58c2');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('5d8184b4-5cf4-4e70-a0ea-b26be65526b1', 'cupressus torqueo', 'dolores ustulo canis', 'totidem', '389Hadley.Swift@hotmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '97366759-f170-40ed-917c-592be8b6b8f2');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('2d2da43c-2864-4b84-a47c-8d78054e2171', 'velociter', 'vomica', 'deprecator timidus', '396Dorris_DAmore-Nicolas@gmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '557fdb90-fe46-48d3-9156-78a4130dd752');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('7e3b5fcd-55d2-47c6-b8d8-da8fc7518a9b', 'creator', 'autus laudantium pecco', 'totam vado', '403Monica_Klein43@hotmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '206f471e-4434-48b5-8bb6-3f5817f5e254');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('bd877164-cd01-4152-9f38-2ebb4f3210ee', 'dapifer', 'patrocinor', 'charisma', '410Rey49@gmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '818f63ae-33fb-4ba7-9695-261741f88e88');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('6dd5d7dc-82a6-4cce-a4a5-375f1da5db88', 'ver', 'vox', 'comburo canto alveus', '417Estelle_Lehner34@gmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '5a155c92-3ccf-48a6-a2c3-e1d07dd2df60');
    `,
      )
    } catch (error) {
      // ignore
    }

}

  public async down(queryRunner: QueryRunner): Promise<void> {}
}