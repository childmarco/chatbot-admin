module LoggerUtilities
  cattr_accessor :logger
  self.logger ||= Rails.logger
  
  def self.logger_login
    logger.info('[Login] ' + DateTime.now.strftime("%Y-%m-%d %H:%M:%S"))
  end
  
  def self.logger_logout
    logger.info('[Logout] ' + DateTime.now.strftime("%Y-%m-%d %H:%M:%S"))
  end
  
  private
  
  def sample_private_method
  
  
  end

end
