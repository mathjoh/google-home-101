package com.github.mathjoh.googlehomekotlin.permission

import org.springframework.stereotype.Service

@Service
class PermissionResponseBuilder {

    fun createPermissionResponse(reason: String): Map<String, Any> {
        val data = mapOf(
                "@type" to "type.googleapis.com/google.actions.v2.PermissionValueSpec",
                "optContext" to reason,
                "permissions" to listOf(
                        "NAME", "DEVICE_PRECISE_LOCATION"
                )
        )
        val systemIntent = mapOf(
                "intent" to "actions.intent.PERMISSION",
                "data" to data
        )
        val google = mapOf(
                "expectUserResponse" to true,
                "systemIntent" to systemIntent
        )

        return mapOf(
                "payload" to mapOf("google" to google)
        )
    }
}