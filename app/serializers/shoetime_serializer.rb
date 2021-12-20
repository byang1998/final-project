class ShoetimeSerializer < ActiveModel::Serializer
  attributes :id, :shoetime
  has_one :user
  has_one :shoe
end
