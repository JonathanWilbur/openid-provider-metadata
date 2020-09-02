"use strict";
exports.__esModule = true;
var schema = {
    // $id: "",
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "OpenIDProviderMetadata",
    description: "Metadata for describing an OpenID Provider.",
    type: "object",
    required: [
        "issuer",
        "authorization_endpoint",
        "jwks_uri",
        "response_types_supported",
        "subject_types_supported",
        "id_token_signing_alg_values_supported",
    ],
    additionalProperties: true,
    properties: {
        issuer: {
            type: "string",
            // format: "uri",
            minLength: 3,
            maxLength: 2048,
            description: "URL using the https scheme with no query or fragment "
                + "component that the OP asserts as its Issuer Identifier. If "
                + "Issuer discovery is supported. this value MUST be identical "
                + "to the issuer value returned by WebFinger. This also MUST "
                + "be identical to the iss Claim value in ID Tokens issued "
                + "from this Issuer."
        },
        authorization_endpoint: {
            type: "string",
            // format: "uri",
            minLength: 3,
            maxLength: 2048,
            description: "URL of the OP's OAuth 2.0 Authorization Endpoint."
        },
        token_endpoint: {
            type: "string",
            // format: "uri",
            minLength: 3,
            maxLength: 2048,
            description: "URL of the OP's OAuth 2.0 Token Endpoint. This is REQUIRED "
                + "unless only the Implicit Flow is used."
        },
        userinfo_endpoint: {
            type: "string",
            // format: "uri",
            minLength: 3,
            description: "URL of the OP's UserInfo Endpoint. This URL MUST use the "
                + "https scheme and MAY contain port, path, and query "
                + "parameter components."
        },
        jwks_uri: {
            type: "string",
            // format: "uri",
            minLength: 3,
            maxLength: 2048,
            description: "URL of the OP's JSON Web Key Set document. This contains the "
                + "signing key(s) the RP uses to validate signatures from the "
                + "OP. The JWK Set MAY also contain the Server's encryption "
                + "key(s), which are used by RPs to encrypt requests to the "
                + "Server. When both signing and encryption keys are made "
                + "available, a use (Key Use) parameter value is REQUIRED for "
                + "all keys in the referenced JWK Set to indicate each key's "
                + "intended usage. Although some algorithms allow the same key "
                + "to be used for both signatures and encryption, doing so is "
                + "NOT RECOMMENDED, as it is less secure. The JWK x5c "
                + "parameter MAY be used to provide X.509 representations of "
                + "keys provided. When used, the bare key values MUST still be "
                + "present and MUST match those in the certificate."
        },
        registration_endpoint: {
            type: "string",
            // format: "uri",
            minLength: 3,
            maxLength: 2048,
            description: "URL of the OP's Dynamic Client Registration Endpoint."
        },
        scopes_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the OAuth 2.0 scope values that this server "
                + "supports. The server MUST support the openid scope value. "
                + "Servers MAY choose not to advertise some supported scope "
                + "values even when this parameter is used, although those "
                + "defined in SHOULD be listed, if supported."
        },
        response_types_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the OAuth 2.0 response_type values that this OP "
                + "supports. Dynamic OpenID Providers MUST support the code, "
                + "id_token, and the token id_token Response Type values."
        },
        response_modes_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the OAuth 2.0 response_mode values that this OP "
                + "supports, as specified in OAuth 2.0 Multiple Response Type "
                + "Encoding Practices."
        },
        grant_types_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            "default": [
                "authorization_code",
                "implicit",
            ],
            description: "A list of the OAuth 2.0 Grant Type values that this OP "
                + "supports. Dynamic OpenID Providers MUST support the "
                + "authorization_code and implicit Grant Type values and MAY "
                + "support other Grant Types."
        },
        acr_values_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the Authentication Context Class References that "
                + "this OP supports."
        },
        subject_types_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1,
                "enum": [
                    "pairwise",
                    "public",
                ]
            },
            description: "A list of the Subject Identifier types that this OP supports."
        },
        id_token_signing_alg_values_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the JWS signing algorithms (alg values) supported "
                + "by the OP for the ID Token to encode the Claims in a JWT. "
                + "The algorithm RS256 MUST be included. The value none MAY be "
                + "supported, but MUST NOT be used unless the Response Type "
                + "used returns no ID Token from the Authorization Endpoint "
                + "(such as when using the Authorization Code Flow)."
        },
        id_token_encryption_alg_values_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the JWE encryption algorithms (alg values) "
                + "supported by the OP for the ID Token to encode the Claims "
                + "in a JWT."
        },
        id_token_encryption_enc_values_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the JWE encryption algorithms (enc values) "
                + "supported by the OP for the ID Token to encode the Claims "
                + "in a JWT."
        },
        userinfo_signing_alg_values_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the JWS signing algorithms (alg values) supported "
                + "by the UserInfo Endpoint to encode the Claims in a JWT. "
                + "The value none MAY be included."
        },
        userinfo_encryption_alg_values_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the JWE encryption algorithms (alg values) "
                + "supported by the UserInfo Endpoint to encode the Claims in "
                + "a JWT."
        },
        userinfo_encryption_enc_values_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the JWE encryption algorithms (enc values) "
                + "supported by the UserInfo Endpoint to encode the Claims in "
                + "a JWT."
        },
        request_object_signing_alg_values_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the JWS signing algorithms (alg values) supported "
                + "by the OP for Request Objects, which are described in "
                + "Section 6.1 of OpenID Connect Core 1.0. These algorithms "
                + "are used both when the Request Object is passed by value "
                + "(using the request parameter) and when it is passed by "
                + "reference (using the request_uri parameter). Servers SHOULD "
                + "support none and RS256."
        },
        request_object_encryption_alg_values_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the JWE encryption algorithms (alg values) "
                + "supported by the OP for Request Objects. These algorithms "
                + "are used both when the Request Object is passed by value "
                + "and when it is passed by reference."
        },
        request_object_encryption_enc_values_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the JWE encryption algorithms (enc values) "
                + "supported by the OP for Request Objects. These algorithms "
                + "are used both when the Request Object is passed by value "
                + "and when it is passed by reference."
        },
        token_endpoint_auth_methods_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            "default": [
                "client_secret_basic",
            ],
            description: "A list of Client Authentication methods supported by this "
                + "Token Endpoint. The options are client_secret_post, "
                + "client_secret_basic, client_secret_jwt, and "
                + "private_key_jwt, as described in Section 9 of OpenID "
                + "Connect Core 1.0 [OpenID.Core]. Other authentication "
                + "methods MAY be defined by extensions. If omitted, the "
                + "default is client_secret_basic -- the HTTP Basic "
                + "Authentication Scheme specified in Section 2.3.1 of OAuth"
                + "2.0."
        },
        token_endpoint_auth_signing_alg_values_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the JWS signing algorithms (alg values) supported "
                + "by the Token Endpoint for the signature on the JWT used to "
                + "authenticate the Client at the Token Endpoint for the "
                + "private_key_jwt and client_secret_jwt authentication "
                + "methods. Servers SHOULD support RS256. The value none MUST "
                + "NOT be used."
        },
        display_values_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the display parameter values that the OpenID "
                + "Provider supports. These values are described in Section "
                + "3.1.2.1 of OpenID Connect Core 1.0."
        },
        claim_types_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the Claim Types that the OpenID Provider supports. "
                + "These Claim Types are described in Section 5.6 of OpenID "
                + "Connect Core 1.0. Values defined by this specification are "
                + "normal, aggregated, and distributed. If omitted, the "
                + "implementation supports only normal Claims."
        },
        claims_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 1
            },
            description: "A list of the Claim Names of the Claims that the OpenID "
                + "Provider MAY be able to supply values for. Note that for "
                + "privacy or other reasons, this might not be an exhaustive "
                + "list."
        },
        service_documentation: {
            type: "string",
            // format: "uri",
            minLength: 3,
            maxLength: 2048,
            description: "URL of a page containing human-readable information that "
                + "developers might want or need to know when using the OpenID "
                + "Provider. In particular, if the OpenID Provider does not "
                + "support Dynamic Client Registration, then information on "
                + "how to register Clients needs to be provided in this "
                + "documentation."
        },
        claims_locales_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 2
            },
            description: "Languages and scripts supported for values in Claims being "
                + "returned, represented as a JSON array of BCP47 language tag "
                + "values. Not all languages and scripts are necessarily "
                + "supported for all Claim values."
        },
        ui_locales_supported: {
            type: "array",
            uniqueItems: true,
            items: {
                type: "string",
                minLength: 2
            },
            description: "Languages and scripts supported for the user interface, "
                + "represented as a JSON array of BCP47 [RFC5646] language tag "
                + "values."
        },
        claims_parameter_supported: {
            type: "boolean",
            "default": false,
            description: "Whether the OP supports use of the claims parameter, with "
                + "true indicating support."
        },
        request_parameter_supported: {
            type: "boolean",
            "default": false,
            description: "Whether the OP supports use of the request parameter, with "
                + "true indicating support."
        },
        request_uri_parameter_supported: {
            type: "boolean",
            "default": false,
            description: "Whether the OP supports use of the request_uri parameter, "
                + "with true indicating support."
        },
        require_request_uri_registration: {
            type: "boolean",
            "default": false,
            description: "Whether the OP requires any request_uri values used to be "
                + "pre-registered using the request_uris registration "
                + "parameter. Pre-registration is REQUIRED when the value is "
                + "true."
        },
        op_policy_uri: {
            type: "string",
            // format: "uri",
            minLength: 3,
            maxLength: 2048,
            description: "URL that the OpenID Provider provides to the person "
                + "registering the Client to read about the OP's requirements "
                + "on how the Relying Party can use the data provided by the "
                + "OP. The registration process SHOULD display this URL to the "
                + "person registering the Client if it is given."
        },
        op_tos_uri: {
            type: "string",
            // format: "uri",
            minLength: 3,
            maxLength: 2048,
            description: "URL that the OpenID Provider provides to the person "
                + "registering the Client to read about OpenID Provider's "
                + "terms of service. The registration process SHOULD display "
                + "this URL to the person registering the Client if it is "
                + "given."
        }
    }
};
exports["default"] = schema;
