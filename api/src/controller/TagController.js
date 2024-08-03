const Tag = require('../models/tag');

async function getAllTags() {
    try {
        return await Tag.findAll();
    } catch (error) {
        console.error('Error fetching tags:', error.message);
    }
}

async function createTag(tagData) {
    try {
        return await Tag.create(tagData);
    } catch (error) {
        console.error('Error creating tag:', error.message);
    }
}

async function getTagById(tagId) {
    try {
        const tag = await Tag.findByPk(tagId);
        if (!tag) throw new Error('Tag not found.');
        return tag;
    } catch (error) {
        console.error('Error fetching tag by ID:', error.message);
    }
}

async function updateTag(tagId, tagData) {
    try {
        const [updated] = await Tag.update(tagData, {
            where: { id: tagId },
        });
        if (!updated) throw new Error('Tag not found.');
        return 'Tag successfully updated.';
    } catch (error) {
        console.error('Error updating tag:', error.message);
    }
}

async function deleteTag(tagId) {
    try {
        const deleted = await Tag.destroy({
            where: { id: tagId },
        });
        if (!deleted) throw new Error('Tag not found.');
        return 'Tag successfully deleted.';
    } catch (error) {
        console.error('Error deleting tag:', error.message);
    }
}

module.exports = {
    getAllTags,
    createTag,
    getTagById,
    updateTag,
    deleteTag,
};
