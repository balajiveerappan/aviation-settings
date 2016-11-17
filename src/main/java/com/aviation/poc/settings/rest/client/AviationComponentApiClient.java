package com.aviation.poc.settings.rest.client;

import java.util.List;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.aviation.poc.settings.vo.ComponentVO;

@FeignClient("aviation-component-api")
public interface AviationComponentApiClient {
	
	@RequestMapping(value = "/splashScreen", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Object> getSplashScreenData(@RequestParam("componentType") final String componentType);
	
	@RequestMapping(value = "/loadComponent", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<ComponentVO> getComponentData(@RequestParam("start") String startDate, @RequestParam("end") String endDate);

}
