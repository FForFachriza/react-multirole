```bash
├── config
│   └── Database.js                 <== 1. Pertama kita membuat dlu file Database.js, kita koneksikan mysql ke kode kita
├── controllers
│   ├── Auth.js                     <== 7. Ketujuh kita buat controller untuk authentikasi user
│   ├── productsController.js       <== 9. Kesembilan kita buat controller untuk product
│   └── usersController.js          <== 4. Keempat kita buat controller untuk user 
├── index.js                        <== 2. Kedua kita setup pembuatan api menggunakan express disini
├── middleware
│   └── authUser.js                 <== 6. Keenam kita buat middleware akses untuk user yang akan mengakses api
├── models                          <== 3. Ketiga kita buat model untuk user dan product yang akan kita gunakan 
│   ├── productModels.js
│   └── userModels.js             
├── package.json
├── package-lock.json
├── readme.md
├── routes                          <== 6.1 Jangan lupa memasukkan middleware authUser.js ke dalam routes selain authRoute.js
│   ├── authRoute.js                <== 8. Kedelapan kita buat route untuk authentikasi user
│   ├── productRoute.js             <== 10. Kesepuluh kita buat route untuk product
│   └── userRoute.js                <== 5. Kelima kita buat route untuk user mengambil api yang kita buat
└── .env                            <== 2.1. Jangan lupa buat file .env untuk menyimpan data-data sehingga kita tidak perlu menulisnya di kode

```