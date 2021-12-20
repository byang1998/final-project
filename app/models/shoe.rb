class Shoe < ApplicationRecord
    has_many :shoetimes
    has_many :users, through: :shoetimes

    validates :title, :image, :desc, :price, presence: true
    validates :title, uniqueness: true
end
