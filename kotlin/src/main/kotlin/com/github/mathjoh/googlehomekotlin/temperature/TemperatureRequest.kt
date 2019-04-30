package com.github.mathjoh.googlehomekotlin.temperature

import java.time.LocalDate

data class TemperatureRequest(
        var location: String?,
        val to: String?,
        val departureDates: List<LocalDate>,
        val returnDates: List<LocalDate>,
        val sessionId: String
)