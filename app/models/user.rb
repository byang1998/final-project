class User < ApplicationRecord
    
    has_many :shoetimes
    has_many :shoes, through: :shoetimes
    has_secure_password

    validates :username, presence: true, uniqueness: true
end
