package kr.co.service;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.dao.signUpDAO;
import kr.co.vo.signUpVO;;

@Service
public class signUpServiceImpl implements signUpService{
	@Inject signUpDAO dao;
	
	//ȸ������
	@Override
	public void register(signUpVO vo) throws Exception {
		dao.register(vo);
	}
}
