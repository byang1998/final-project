class Shoe < ApplicationRecord
    has_many :shoetimes
    has_many :users, through: :shoetimes

    validates :title, :image, :desc, :rating, :price, presence: true
    validates :title, uniqueness: true
end
