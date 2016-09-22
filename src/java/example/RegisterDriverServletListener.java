package example;

import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * Web application lifecycle listener.
 *
 * @author rbastide
 */
public class RegisterDriverServletListener implements ServletContextListener {

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		try {
			// Register your drivers here
			Class.forName("com.mysql.jdbc.Driver");
		} catch (Exception ex) {
			Logger.getLogger(RegisterDriverServletListener.class.getName()).log(Level.SEVERE, null, ex);
		}
	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
	}
}
