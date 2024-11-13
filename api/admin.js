// Admin API endpoint
const getAdminStats = (db) => {
    return async (req, res) => {
      try {
        const stats = await db.getAdminStats();
        res.json(stats);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching admin stats' });
      }
    };
  };
  
  module.exports = (db) => {
    return {
      getStats: getAdminStats(db),
    };
  };