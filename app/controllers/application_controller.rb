class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # For Basic Authenticate, you may want to comment out
  # http_basic_authenticate_with name: ENV['BASIC_AUTH_USERNAME'], password: ENV['BASIC_AUTH_PASSWORD'] if Rails.env.staging?
  # http_basic_authenticate_with name: ENV['BASIC_AUTH_USERNAME'], password: ENV['BASIC_AUTH_PASSWORD']

  # Exceptionをcatchした場合は、500ページを表示
  rescue_from Exception, with: :error_500 unless Rails.env.development?

  # 404エラー
  rescue_from AbstractController::ActionNotFound, with: :error_404 unless Rails.env.development?
  rescue_from ActionController::RoutingError, with: :error_404 unless Rails.env.development?
  rescue_from ActiveRecord::RecordNotFound, with: :error_404 unless Rails.env.development?

  def error_500
    render file: "#{Rails.root}/public/500.html", layout: false, status: 500
  end

  def error_404
    render file: "#{Rails.root}/public/404.html", layout: false, status: 404
  end
end
