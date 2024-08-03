const User = require('../models/user');
const Problem = require('../models/problem');

async function getAllUsers() {
    try {
        
        return await User.findAll();
    } catch (error) {
        console.error('Error fetching users:', error.message);
    }
}

async function createUser(userData) {
    try {
        return await User.create(userData);
    } catch (error) {
        console.error('Error creating user:', error.message);
    }
}

async function getUserByEmail(email) {
    try {
        await User.sync();
        return await User.findOne({ where: { email: email } });
    } catch (error) {
        console.error('Error fetching user by email:', error.message);
    }
}

async function getUserById(userId) {
    try {
        const user = await User.findByPk(userId);
        if (!user) throw new Error('User not found.');
        return user;
    } catch (error) {
        console.error('Error fetching user by ID:', error.message);
    }
}

async function updateUser(userId, userData) {
    try {
        const [updated] = await User.update(userData, {
            where: { id: userId },
        });
        if (!updated) throw new Error('User not found.');
        return true;
    } catch (error) {
        console.error('Error updating user:', error.message);
    }
}

async function deleteUser(userId) {
    try {
        const deleted = await User.destroy({
            where: { id: userId },
        });
        if (!deleted) throw new Error('User not found.');
        return true;
    } catch (error) {
        console.error('Error deleting user:', error.message);
    }
}

async function getAllProblemsByUser(userId) {
    try {
        const user = await User.findByPk(userId, {
            include: { model: Problem, as: 'Problems' },
        });
        if (!user) throw new Error('User not found.');
        return user.Channels;
    } catch (error) {
        console.error('Error fetching problems by user:', error.message);
    }
}

async function getAllAdmins() {
    try {
        return await User.findAll({
            where: { permission: 'ADMIN' },
        });
    } catch (error) {
        console.error('Error fetching admins:', error.message);
    }
}

async function deleteProblemByUser(userId, channelId) {
    try {
        const user = await User.findByPk(userId);
        const problem = await Problem.findByPk(channelId);
        if (!user || !problem) throw new Error('User or problem not found.');
        user.removeChannel(channel);
        return { msg: 'success' };
    } catch (error) {
        console.error('Error deleting problem by user:', error.message);
    }
}

async function addProblemToUser(userId, problemId) {
    try {
        const user = await User.findByPk(userId);
        const problem = await Problem.findByPk(problemId);
        if (!user || !problem) throw new Error('User or problem not found.');
        await user.addProblem(problem);
    } catch (error) {
        console.error('Error adding channel to user:', error.message);
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserByEmail,
    getUserById,
    updateUser,
    deleteUser,
    getAllProblemsByUser,
    getAllAdmins,
    deleteProblemByUser,
    addProblemToUser,
};
