# encoding: utf-8
require 'kconv'

require "#{Rails.root}/app/models/user"

class FileDownload < ActiveRecord::Base

  def self.user_csv(tablename)

    Rails.logger.debug("Download csv taks starts")

    @users = User.all

    result = ''
    result << @users.attributes_name.join(',')
    result << "\r"

    @users.each do |user|
      result << user.attributes.value.join(',')
      result << "\r"
    end

    result.kconv(Kconv::SJIS, Kconv::UTF8)


    Rails.logger.debug("Download csv taks finish")

  end


end

