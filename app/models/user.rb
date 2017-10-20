class User < ActiveRecord::Base

  # 既存テーブルを使用する場合などテーブル名を上書きすることが可能。
  # self.table_name = ""
  # self.primary_key


  # validates :username, presence: true
  # validates :firstName, presence: true
  # validates :lastName, presence: true

  has_many :request


end
