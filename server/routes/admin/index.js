module.exports = (app) => {
	const express = require('express')
	const router = express.Router({
		mergeParams: true
	})

	//创建分类接口
	router.post('/', async (req, res) => {
		// console.log(req.body)
		const model = await req.model.create(req.body)
		res.send(model)
	})

	//查询分类接口
	router.get('/', async (req, res) => {
		const items = await req.model.find()
		res.send(items)
	})

	//通过id获取数据
	router.get('/:id', async (req, res) => {
		const model = await req.model.findById(req.params.id)
		res.send(model)
	})

	//通过id更改
	router.put('/:id', async (req, res) => {
		const model = await req.model.findByIdAndUpdate(req.params.id, req.body)
		res.send(model)
	})

	//删除操作
	router.delete('/:id', async (req, res) => {
		await req.model.findByIdAndDelete(req.params.id, req.body)
		res.send({
			msg: "删除成功"
		})
	})

	app.use("/admin/api/rest/:res", async (req, res, next) => {
		const modelName = require("inflection").classify(req.params.res)
		req.model = require(`../../model/${modelName}`)
		next()
	}, router)



	const multer = require("multer")
	const upload = multer({
		dest: __dirname + "/../../uploads"
	})
	app.post("/admin/api/upload", upload.single("file"), async (req, res) => {
		const file = req.file
		file.url = `http://localhost:9001/uploads/${file.filename}`
		res.send(file)
	})
}