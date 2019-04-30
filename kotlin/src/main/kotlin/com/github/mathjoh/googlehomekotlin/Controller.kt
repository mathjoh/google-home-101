package com.github.mathjoh.googlehomekotlin

import org.apache.logging.log4j.LogManager.getLogger
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class Controller {

    @PostMapping("/webhook")
    fun googleHomeWebHook(@RequestBody payload: String): Map<String, Any> {
        logger.info(payload)


    }

    companion object {
        private val logger = getLogger(Controller::class.java)
    }
}