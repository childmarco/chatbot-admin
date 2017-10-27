module ApiUtilities
  cattr_accessor :logger
  self.logger ||= Rails.logger
  
  
  def self.check_content(message)
    
    logger.info("Hello start")
    val = {
      type: 'text',
      text: message
    }
    logger.info(val)
    logger.info("Hello end")
    val
  end
  
  
  private
  
  def logger_login
    logger.info('[Login] ' + DateTime.now.strftime("%Y-%m-%d %H:%M:%S"))
  end
  
  def logger_logout
    logger.info('[Logout] ' + DateTime.now.strftime("%Y-%m-%d %H:%M:%S"))
  end
  
  def dispatch_action
  
  
  end
  
  def format_message
  
  
  end


end
