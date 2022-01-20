angular.
    module('core.heroi').
    factory('Heroi', ['$resource',
        function ($resource) {
            const publicKey = '5a237863b3cc2061003cbbc4fe20dc06';
            const privateKey = 'fbf255068eccea6d0ef951b9f25626b57ab2fe72';
            const ts = '1';
            const hash =  md5(ts+privateKey+publicKey);
            return $resource('https://gateway.marvel.com/v1/public/characters/:characterId', 
            {characterId: '@id'}, 
            {
                query: {
                    method: 'GET',
                    params: { 
                        apikey:publicKey,
                        ts,
                        hash
                     },
                },
                search:{
                    method: 'GET',
                    params: { 
                        nameStartsWith:null,
                        apikey:publicKey,
                        ts,
                        hash
                    },
                },
                find:{
                    method: 'GET',
                    params: { 
                        apikey:publicKey,
                        ts,
                        hash
                    },
                }
            });
        }
    ]);