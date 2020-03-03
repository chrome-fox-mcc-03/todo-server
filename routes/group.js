const router = require('express').Router()
const { createGroup, deleteGroup, addMemberGroup, deleteMemberGroup, findAllMemberGroup } = require('../controllers/group')

router.post('/', createGroup)
router.delete('/:id', deleteGroup)

router.get('/member', findAllMemberGroup)
router.post('/member', addMemberGroup)
router.delete('/member/:id', deleteMemberGroup)

module.exports = router