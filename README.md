# Rent Estimation API

This API helps provides information of the rent for a given zip code and apartment area.
This information can be used as a reference to decide rent for an apartment in the same location wtih similar area.
It's implemented with Node.js and TypeScript. 

## Dependencies:

The project depends on the following dev libraries:
* `Node.js`;
* `TypeScript`;
* `jest` and `ts-jest`;
* `ts-node-dev`;
* `tslint`.
* `sequelize`.
* `swagger`.


## Installation

To install it, run:

```sh
$ yarn install
```


## Test

To test it, run:

```sh
$ yarn test
```


## Start

To start it, run:

```sh
$ yarn dev

OR

$ yarn start
```


### API Documentation

Start the application and open the below URL to access the swagger document.

```
http://localhost:3000/api-docs/
```

### Rent Estimation API

Start the application and open the below URL to access the rent estimation api.

```
http://localhost:3000/api/v1/search?zip_code=10119&apartment_area=76
```

### Request

`zip_code` location of the apartment
`apartment_size` size of the apartment


### Response

On success, it return `200` HTTP Status with below response

```
[
    {
        "apartment_type": "loft",
        "apartment_rent": 988
    },
    {
        "apartment_type": "studio",
        "apartment_rent": 532
    },
    {
        "apartment_type": "railroad", 
        "apartment_rent": 760
    }
]
```

On error, it return `4XX` or `5XX` HTTP Status.

## Copyright

Author: Sachin Lubana ([@lubanasachin](https://github.com/sachinlubana26))


