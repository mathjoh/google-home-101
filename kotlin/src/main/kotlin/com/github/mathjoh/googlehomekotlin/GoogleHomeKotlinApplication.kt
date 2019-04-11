package com.github.mathjoh.googlehomekotlin

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class GoogleHomeKotlinApplication

fun main(args: Array<String>) {
	runApplication<GoogleHomeKotlinApplication>(*args)
}
