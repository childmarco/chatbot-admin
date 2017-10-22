# Be sure to restart your server when you modify this file.

# Configure sensitive parameters which will be filtered from the log file.
# TODO ここにログに出力したくないパラメータを追記
Rails.application.config.filter_parameters += [:password, :pass, :email]
