class ShoeSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :desc, :rating, :price
end
