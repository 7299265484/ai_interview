```mermaid
erDiagram

    USERS {
        int id PK
        string email
        string password_hash
        boolean is_email_verified
        boolean is_phone_verified
        string status
        datetime created_at
    }

    USER_ROLES {
        int id PK
        int user_id FK
        string role_type
    }

    USER_PROFILE {
        int id PK
        int user_id FK
        string full_name
        string phone
        string country
        string state
        string account_type
        string linkedin_url
    }

    KYC_RECORDS {
        int id PK
        int user_id FK
        string pan_number
        string aadhaar_doc_url
        string selfie_url
        string verification_status
        datetime verified_at
        string kyc_provider
    }

    INDUSTRIES {
        int id PK
        string name
    }

    LISTINGS {
        int id PK
        int seller_id FK
        int industry_id FK
        string title
        string asset_type
        text description
        float monthly_revenue
        float monthly_profit
        float asking_price
        string reason_for_sale
        string visibility
        string status
        datetime created_at
    }

    LISTING_DOCS {
        int id PK
        int listing_id FK
        string doc_type
        string file_url
        boolean is_verified
        datetime uploaded_at
    }

    LISTING_STATS {
        int id PK
        int listing_id FK
        int monthly_users
        string traffic_source
        datetime last_updated
    }

    OFFERS {
        int id PK
        int listing_id FK
        int buyer_id FK
        float offer_price
        text terms
        string status
        datetime created_at
    }

    DEAL_ROOMS {
        int id PK
        int listing_id FK
        int buyer_id FK
        int seller_id FK
        int offer_id FK
        string status
        datetime created_at
    }

    CHAT_MESSAGES {
        int id PK
        int deal_room_id FK
        int sender_id FK
        text message
        datetime created_at
    }

    DEAL_DOCUMENTS {
        int id PK
        int deal_room_id FK
        string file_url
        string doc_type
        int uploaded_by
    }

    CHECKLIST_TASKS {
        int id PK
        int deal_room_id FK
        string task_name
        string status
        int completed_by
        datetime completed_at
    }

    ESCROW_TRANSACTIONS {
        int id PK
        int deal_room_id FK
        float amount
        string payment_status
        string escrow_provider
        datetime released_at
        datetime created_at
    }

    USERS ||--o{ USER_ROLES : has
    USERS ||--|| USER_PROFILE : owns
    USERS ||--|| KYC_RECORDS : verifies

    USERS ||--o{ LISTINGS : creates
    INDUSTRIES ||--o{ LISTINGS : categorizes

    LISTINGS ||--o{ LISTING_DOCS : contains
    LISTINGS ||--|| LISTING_STATS : tracks

    USERS ||--o{ OFFERS : makes
    LISTINGS ||--o{ OFFERS : receives

    OFFERS ||--|| DEAL_ROOMS : creates

    DEAL_ROOMS ||--o{ CHAT_MESSAGES : includes
    DEAL_ROOMS ||--o{ DEAL_DOCUMENTS : stores
    DEAL_ROOMS ||--o{ CHECKLIST_TASKS : manages
    DEAL_ROOMS ||--|| ESCROW_TRANSACTIONS : processes
