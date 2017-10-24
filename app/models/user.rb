class User < ActiveRecord::Base


  # 既存テーブルを使用する場合などテーブル名を上書きすることが可能。
  # self.table_name = ""
  # self.primary_key

  # Validation Function

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  # VALID_PHONENUMBER_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i


  validates :email,
            presence:   true,
            uniqueness: true,
            format:     { with: VALID_EMAIL_REGEX, message: 'メールアドレスの形式が誤っています。' }
  validates :phoneNumber,
            presence:   { message: '電話番号を入力してください。' },
            uniqueness: true
  validates :firstName, :lastName,
            presence: true
  validates :pass,
            presence:     true,
            confirmation: { message: 'パスワードが一致しません。' }
  validates :role,
            presence: true

  # has_many :requests
  # has_many :requests, -> foreign_key: "userId"
  has_many :requests, foreign_key: 'userId'


  def self.authenticate(email, password)
    usr = find_by(email: email)
    if usr != nil &&
      usr.password == Digest::SHA1.hexdigest(MY_APPLICATIONS.salt + password) then
      usr
    else
      return
    end
  end


end
