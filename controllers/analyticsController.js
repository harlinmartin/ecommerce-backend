const Product = require('../models/product');

// @desc    Get product recommendations based on user behavior (RapidMiner Integration)
// @route   GET /api/analytics/recommendations
// @access  Private
const getRecommendations = async (req, res, next) => {
    try {
        // Here we would typically send user history/cart data to RapidMiner API
        const rapidMinerEndpoint = process.env.RAPIDMINER_API_URL;
        
        let recommendations = [];

        try {
            // Mocking request to RapidMiner service
            /*
            const response = await axios.post(rapidMinerEndpoint, {
                userId: req.user._id,
                action: 'predict'
            });
            const recommendedProductIds = response.data.recommended_items;
            recommendations = await Product.find({ _id: { $in: recommendedProductIds } });
            */
            
            // Since we don't have a live RapidMiner instance, we fallback to a mock response
            console.log(`[Mock] Requested RapidMiner at: ${rapidMinerEndpoint}`);
            
            // Fetch random products as mock recommendations
            recommendations = await Product.aggregate([{ $sample: { size: 3 } }]);

        } catch (apiError) {
            console.error('RapidMiner API error, falling back to basic recommendations', apiError.message);
            // Fallback logic
            recommendations = await Product.find().sort('-createdAt').limit(3);
        }

        res.status(200).json({
            success: true,
            source: 'RapidMiner Analytics Engine (Mock)',
            count: recommendations.length,
            data: recommendations
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getRecommendations
};
